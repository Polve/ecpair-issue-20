import Component from '@glimmer/component'
import { tracked } from '@glimmer/tracking'
import { action } from '@ember/object'

interface ImportsSignature {
  // The arguments accepted by the component
  Args: {}
  // Any blocks yielded by the component
  Blocks: {
    default: []
  }
  // The element to which `...attributes` is applied in the component template
  Element: null
}

import { Signer, SignerAsync, ECPairInterface, ECPairFactory, ECPairAPI, TinySecp256k1Interface } from 'ecpair'

console.log('Imported class:', Signer)

export default class ImportsComponent extends Component<ImportsSignature> {
  @tracked res = 'none';

  @action button1() {
    this.res = 'todo'
  }

}
