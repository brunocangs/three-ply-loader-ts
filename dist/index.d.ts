import * as THREE from "three";
declare type Indexable<A> = {
    [field: string]: A;
};
declare class PLYLoader {
    manager: THREE.LoadingManager;
    propertyNameMapping: Indexable<string>;
    path: string;
    constructor(manager?: THREE.LoadingManager);
    load: (url: string, onLoad: (result: THREE.BufferGeometry) => void, onProgress?: ((request: ProgressEvent) => void) | undefined, onError?: ((event: ErrorEvent) => void) | undefined) => void;
    setPath: (value: string) => this;
    setPropertyNameMapping: (mapping: Indexable<string>) => void;
    parse: (data: string | ArrayBuffer) => THREE.BufferGeometry;
}
export default PLYLoader;
