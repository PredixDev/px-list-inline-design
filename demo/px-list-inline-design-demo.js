/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import '../css/px-list-inline-design-demo-styles.js';
import 'px-sass-doc/px-sass-doc.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
    <!-- 0: Import the styles-->
    <style include="px-list-inline-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-list-inline-design" description="The Predix UI List Inline module simply displays a list as a delimited horizontal row." layer="objects" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-defaults-design&quot;
  ]" selected-options="{{selectedOptions}}">

<!-- 2: Set Options -->
<!-- N/A -->

<!-- 3: Make HTML Demo -->
<section slot="demo-html">
<ul class="list-inline">
  <li>List Item</li><li>List Item</li><li>List Item</li>
</ul>
</section>

<!-- 4: Set Import Slot -->
<section slot="import">
@import 'px-list-inline-design/_objects.list-inline.scss';
</section>

<!-- 5: Set Usage HTML -->
<section slot="usage">
\`\`\`
<!-- List Inline -->
<ul class="list-inline">
  <li>List Item</li>
  <li>List Item</li>
  <li>List Item</li>
</ul>

\`\`\`
</section>

</px-sass-doc>
`,

  is: 'px-list-inline-design-demo',

  attached : function(){
    this.async(function() {
      this.fire('px-sass-doc-demo-updated',{})
    }, 10);
  }
});
