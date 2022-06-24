export interface DataBase extends IDBIndexParameters {
    value: string;
    version: number;
}

//function usesDB(props : (props: DBase) => void ): any  {
function usesDB(props: DataBase): any  {
    const DBase: IDBFactory = indexedDB;
    let request: IDBOpenDBRequest  = DBase.open(props['value'], props['version']);

    request.onsuccess = function() {
        props: void(request.result);
        let log: Console | void = console.log(request.result);
    }

    request.onerror = function(ev: Event){
        throw ev;
    }
    
}

export { usesDB };