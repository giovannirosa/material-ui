import 'docs/src/modules/components/bootstrap';
// --- Post bootstrap -----
import React from 'react';
import MarkdownDocs from 'docs/src/modules/components/MarkdownDocs';

const req = require.context('markdown', true, /.md$/);

function Page(props) {
  return (
    <MarkdownDocs
      markdown={req(`./popper${props.lang}.md`)}
      demos={{
        'pages/utils/popper/SimplePopper.js': {
          js: require('docs/src/pages/utils/popper/SimplePopper').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/utils/popper/SimplePopper'), 'utf8')
`,
        },
        'pages/utils/popper/PopperPopupState.js': {
          js: require('docs/src/pages/utils/popper/PopperPopupState').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/utils/popper/PopperPopupState'), 'utf8')
`,
        },
        'pages/utils/popper/PositionedPopper.js': {
          js: require('docs/src/pages/utils/popper/PositionedPopper').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/utils/popper/PositionedPopper'), 'utf8')
`,
        },
        'pages/utils/popper/NoTransitionPopper.js': {
          js: require('docs/src/pages/utils/popper/NoTransitionPopper').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/utils/popper/NoTransitionPopper'), 'utf8')
`,
        },
        'pages/utils/popper/FakedReferencePopper.js': {
          js: require('docs/src/pages/utils/popper/FakedReferencePopper').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/utils/popper/FakedReferencePopper'), 'utf8')
`,
        },
        'pages/utils/popper/ScrollPlayground.js': {
          js: require('docs/src/pages/utils/popper/ScrollPlayground').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/utils/popper/ScrollPlayground'), 'utf8')
`,
        },
        'pages/utils/popper/RenderPropsPopper.js': {
          js: require('docs/src/pages/utils/popper/RenderPropsPopper').default,
          raw: preval`
module.exports = require('fs')
  .readFileSync(require.resolve('docs/src/pages/utils/popper/RenderPropsPopper'), 'utf8')
`,
        },
      }}
    />
  );
}

export default Page;
