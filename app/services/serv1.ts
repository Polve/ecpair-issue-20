import Service from '@ember/service';

export default class Serv1Service extends Service {
  getImport(): string {
    return 'serv1';
  }

}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:serv1')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('serv1') declare altName: Serv1Service;`.
declare module '@ember/service' {
  interface Registry {
    serv1: Serv1Service;
  }
}
