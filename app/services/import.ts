import Service from '@ember/service';

// import * as ECC from 'tiny-secp256k1';
// import { ECPairFactory, type ECPairAPI } from 'ecpair';
// //const ECPair: ECPairAPI = ECPairFactory(ECC)

export default class ImportService extends Service {
  getImport(): string {
    return 'TODO';
  }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:import')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('import') declare altName: ImportService;`.
declare module '@ember/service' {
  interface Registry {
    import: ImportService;
  }
}
