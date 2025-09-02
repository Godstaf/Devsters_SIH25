from fastapi import APIRouter, HTTPException
from typing import List
from .. import crud, schemas

router = APIRouter()

@router.post("/items/", response_model=schemas.Item)
def create_item(item: schemas.ItemCreate):
    db_item = crud.create_item(item)
    if db_item is None:
        raise HTTPException(status_code=400, detail="Item could not be created")
    return db_item

@router.get("/items/", response_model=List[schemas.Item])
def read_items(skip: int = 0, limit: int = 10):
    items = crud.get_items(skip=skip, limit=limit)
    return items

@router.get("/items/{item_id}", response_model=schemas.Item)
def read_item(item_id: int):
    item = crud.get_item(item_id=item_id)
    if item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return item

@router.put("/items/{item_id}", response_model=schemas.Item)
def update_item(item_id: int, item: schemas.ItemUpdate):
    db_item = crud.update_item(item_id=item_id, item=item)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item

@router.delete("/items/{item_id}", response_model=schemas.Item)
def delete_item(item_id: int):
    db_item = crud.delete_item(item_id=item_id)
    if db_item is None:
        raise HTTPException(status_code=404, detail="Item not found")
    return db_item