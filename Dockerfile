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
RUN pip install --no-cache-dir -r requirements.txt

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
COPY --chown=appuser:appuser app ./app
COPY --chown=appuser:appuser templates ./templates
COPY --chown=appuser:appuser static ./static
COPY --chown=appuser:appuser README.md ./README.md

# Expose Uvicorn port
EXPOSE 8000

# Default envs (override at runtime)
ENV HOST=0.0.0.0 \
    PORT=8000

# Healthcheck: basic GET /
HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://127.0.0.1:8000/ || exit 1

# Run the FastAPI app with Uvicorn
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
