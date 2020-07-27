import { openDB } from 'idb';

async function openDBStore(database, storeName) {
  try {
    return await openDB(database, 1, {
      upgrade(db) {
        const store = db.createObjectStore(storeName, {
          keyPath: 'id',
        });
        store.createIndex('name', 'name', { unique: false });
      },
    });
  } catch (error) {
    return error;
  }
}

async function addOrUpdateToStore(data, database, store) {
  try {
    const db = await openDBStore(database, store);
    const tx = db.transaction(store, 'readwrite');

    return await tx.store.put(data);
  } catch (error) {
    return error;
  }
}

async function getFromStore(database, store) {
  try {
    const db = await openDBStore(database, store);

    return await db.getAllFromIndex(store, 'name');
  } catch (error) {
    return error;
  }
}

async function getOneFromStore(id, database, store) {
  try {
    const db = await openDBStore(database, store);

    // cast id to number (+id)
    return await db.get(store, +id);
  } catch (error) {
    return error;
  }
}

async function deleteFromStore(id, database, store) {
  try {
    const db = await openDBStore(database, store);
    const tx = db.transaction(store, 'readwrite');

    return await tx.store.delete(id);
  } catch (error) {
    return error;
  }
}

export { addOrUpdateToStore, getFromStore, getOneFromStore, deleteFromStore };
