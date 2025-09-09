from typing import Dict, List, Optional

from . import schemas


_items: Dict[int, schemas.Item] = {}
_next_id: int = 1


def _get_next_id() -> int:
    global _next_id
    current = _next_id
    _next_id += 1
    return current


def create_item(item: schemas.ItemCreate) -> schemas.Item:
    item_id = _get_next_id()
    new_item = schemas.Item(id=item_id, name=item.name, description=item.description)
    _items[item_id] = new_item
    return new_item


def get_items(skip: int = 0, limit: int = 10) -> List[schemas.Item]:
    values = list(_items.values())
    return values[skip : skip + limit]


def get_item(item_id: int) -> Optional[schemas.Item]:
    return _items.get(item_id)


def update_item(item_id: int, item: schemas.ItemUpdate) -> Optional[schemas.Item]:
    existing = _items.get(item_id)
    if existing is None:
        return None
    updated = existing.model_copy(update=item.model_dump(exclude_unset=True))
    _items[item_id] = updated
    return updated


def delete_item(item_id: int) -> Optional[schemas.Item]:
    return _items.pop(item_id, None)