import { module, test } from 'qunit';
import { setupTest } from 'sample-ts-ember-imports/tests/helpers';

module('Unit | Service | serv1', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:serv1');
    assert.ok(service);
  });
});
