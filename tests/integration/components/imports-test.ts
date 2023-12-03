import { module, test } from 'qunit';
import { setupRenderingTest } from 'sample-ts-ember-imports/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | imports', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Imports />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Imports>
        template block text
      </Imports>
    `);

    assert.dom().hasText('template block text');
  });
});
