Ext.data.JsonP.Ext_os({"tagname":"class","name":"Ext.os","autodetected":{},"files":[{"filename":"OS.js","href":"OS.html#Ext-os"}],"extends":"Ext.env.OS","singleton":true,"members":[{"name":"deviceType","tagname":"property","owner":"Ext.os","id":"property-deviceType","meta":{}},{"name":"name","tagname":"property","owner":"Ext.env.OS","id":"property-name","meta":{"readonly":true}},{"name":"version","tagname":"property","owner":"Ext.env.OS","id":"property-version","meta":{"readonly":true}},{"name":"is","tagname":"method","owner":"Ext.env.OS","id":"method-is","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-Ext.os","short_doc":"Provides useful information about the current operating system environment. ...","component":false,"superclasses":["Ext.env.OS"],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.env.OS' rel='Ext.env.OS' class='docClass'>Ext.env.OS</a><div class='subclass '><strong>Ext.os</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/OS.html#Ext-os' target='_blank'>OS.js</a></div></pre><div class='doc-contents'><p>Provides useful information about the current operating system environment.</p>\n\n<p>Example:</p>\n\n<pre><code>if (Ext.os.is.Windows) {\n    // Windows specific code here\n}\n\nif (Ext.os.is.iOS) {\n    // iPad, iPod, iPhone, etc.\n}\n\nconsole.log(\"Version \" + <a href=\"#!/api/Ext.os-property-version\" rel=\"Ext.os-property-version\" class=\"docClass\">Ext.os.version</a>);\n</code></pre>\n\n<p>For a full list of supported values, refer to the <a href=\"#!/api/Ext.os-method-is\" rel=\"Ext.os-method-is\" class=\"docClass\">is</a> property/method.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-deviceType' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.os'>Ext.os</span><br/><a href='source/OS.html#Ext-os-property-deviceType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.os-property-deviceType' class='name expandable'>deviceType</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"></span></div><div class='description'><div class='short'>The generic type of the current device. ...</div><div class='long'><p>The generic type of the current device.</p>\n\n<p>Possible values:</p>\n\n<ul>\n<li>Phone</li>\n<li>Tablet</li>\n<li>Desktop</li>\n</ul>\n\n\n<p>For testing purposes the deviceType can be overridden by adding\na deviceType parameter to the URL of the page, like so:</p>\n\n<pre><code>http://localhost/mypage.html?deviceType=Tablet\n</code></pre>\n</div></div></div><div id='property-name' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.env.OS' rel='Ext.env.OS' class='defined-in docClass'>Ext.env.OS</a><br/><a href='source/OS.html#Ext-env-OS-property-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.OS-property-name' class='name expandable'>name</a> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>The full name of the current operating system. ...</div><div class='long'><p>The full name of the current operating system. Possible values are:</p>\n\n<ul>\n<li>iOS</li>\n<li>Android</li>\n<li>WebOS</li>\n<li>BlackBerry,</li>\n<li>MacOS</li>\n<li>Windows</li>\n<li>Linux</li>\n<li>Other</li>\n</ul>\n\n<p>Defaults to: <code>null</code></p></div></div></div><div id='property-version' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.env.OS' rel='Ext.env.OS' class='defined-in docClass'>Ext.env.OS</a><br/><a href='source/OS.html#Ext-env-OS-property-version' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.OS-property-version' class='name expandable'>version</a> : <a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a><span class=\"signature\"><span class='readonly' >readonly</span></span></div><div class='description'><div class='short'>Refer to Ext.Version ...</div><div class='long'><p>Refer to <a href=\"#!/api/Ext.Version\" rel=\"Ext.Version\" class=\"docClass\">Ext.Version</a></p>\n<p>Defaults to: <code>null</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-is' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.env.OS' rel='Ext.env.OS' class='defined-in docClass'>Ext.env.OS</a><br/><a href='source/OS.html#Ext-env-OS-method-is' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.env.OS-method-is' class='name expandable'>is</a>( <span class='pre'>name</span> ) : <a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a><span class=\"signature\"></span></div><div class='description'><div class='short'>A \"hybrid\" property, can be either accessed as a method call, i.e:\n\nif (Ext.os.is('Android')) {\n    // ... ...</div><div class='long'><p>A \"hybrid\" property, can be either accessed as a method call, i.e:</p>\n\n<pre><code>if (<a href=\"#!/api/Ext.os-method-is\" rel=\"Ext.os-method-is\" class=\"docClass\">Ext.os.is</a>('Android')) {\n    // ...\n}\n</code></pre>\n\n<p>or as an object with boolean properties, i.e:</p>\n\n<pre><code>if (Ext.os.is.Android) {\n    // ...\n}\n</code></pre>\n\n<p>Versions can be conveniently checked as well. For example:</p>\n\n<pre><code>if (Ext.os.is.Android2) {\n    // Equivalent to (Ext.os.is.Android &amp;&amp; Ext.os.version.equals(2))\n}\n\nif (Ext.os.is.iOS32) {\n    // Equivalent to (Ext.os.is.iOS &amp;&amp; Ext.os.version.equals(3.2))\n}\n</code></pre>\n\n<p>Note that only <a href=\"#!/api/Ext.Version-method-getMajor\" rel=\"Ext.Version-method-getMajor\" class=\"docClass\">major component</a> and <a href=\"#!/api/Ext.Version-method-getShortVersion\" rel=\"Ext.Version-method-getShortVersion\" class=\"docClass\">simplified</a>\nvalue of the version are available via direct property checking. Supported values are:</p>\n\n<ul>\n<li>iOS</li>\n<li>iPad</li>\n<li>iPhone</li>\n<li>iPhone5 (also true for 4in iPods).</li>\n<li>iPod</li>\n<li>Android</li>\n<li>WebOS</li>\n<li>BlackBerry</li>\n<li>Bada</li>\n<li>MacOS</li>\n<li>Windows</li>\n<li>Linux</li>\n<li>Other</li>\n</ul>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The OS name to check.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Boolean\" rel=\"Boolean\" class=\"docClass\">Boolean</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});