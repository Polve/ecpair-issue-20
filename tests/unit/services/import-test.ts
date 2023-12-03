import { module, test } from 'qunit';
import { setupTest } from 'sample-ts-ember-imports/tests/helpers';

module('Unit | Service | import', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    const service = this.owner.lookup('service:import');
    assert.ok(service);
  });
});
