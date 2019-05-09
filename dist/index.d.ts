import * as THREE from "three";
declare type Progress = (request: ProgressEvent) => void;
declare type Load = (result: THREE.BufferGeometry) => void;
declare type Error = (event: ErrorEvent) => void;
declare class PlyLoader {
    manager: THREE.LoadingManager;
    propertyNameMapping: any;
    constructor(manager?: THREE.LoadingManager);
    load: (url: string, onLoad?: Load, onProgress?: Progress | undefined, onError?: Error | undefined) => void;
    setPropertyNameMapping: (mapping: any) => void;
    parse: (data: string | ArrayBuffer) => THREE.BufferGeometry;
}
export default PlyLoader;
