# syntax=docker/dockerfile:1

# ===== Base image with Python =====
FROM python:3.11-slim AS base
ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1

# Install system build deps and runtime libs for psycopg2
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
       build-essential \
       libpq-dev \
       wget \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# ===== Dependencies layer =====
FROM base AS deps
COPY requirements.txt ./
ENV PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PIP_DEFAULT_TIMEOUT=120
RUN pip install --no-cache-dir --upgrade pip setuptools wheel \
    && pip install --no-cache-dir -r requirements.txt

# ===== Frontend build (Vite React) =====
FROM node:20-slim AS frontend
WORKDIR /frontend
COPY frontend/package*.json ./
RUN npm ci --no-audit --no-fund
COPY frontend .
RUN npm run build

# ===== Runtime image =====
FROM base AS runtime

# Create non-root user
RUN useradd -m appuser
USER appuser

WORKDIR /app

# Copy installed packages from deps layer
COPY --from=deps /usr/local/lib/python3.11 /usr/local/lib/python3.11
COPY --from=deps /usr/local/bin /usr/local/bin

# Copy project files
COPY --chown=appuser:appuser backend ./backend
COPY --chown=appuser:appuser static ./static
COPY --chown=appuser:appuser README.md ./README.md

# Copy frontend build artifacts to be served by FastAPI
COPY --chown=appuser:appuser --from=frontend /frontend/dist ./frontend

# Expose Uvicorn port
EXPOSE 8000

# Default envs (override at runtime)
ENV HOST=0.0.0.0 \
    PORT=8000

# Healthcheck: basic GET /
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1:8000/ || exit 1

# Run the FastAPI app with Uvicorn
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "8000"]
