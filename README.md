Creates simple jQuery.mobile tabs.

- Uses widget factory
- Follows normal jQuery mobile standards
- Implemented in a non-obtrusive way
- Programmed like a true jQuery novice :)

Usage
=====

First off, realize that this is a VERY rudimentary widget plugin, and that its use is fairly specific, meaning that I've only tested it one way, 
with the following **caveats**:

- Does not load any content via AJAX
- Does not load any different actual page parts, and depends on user doing some css in order to make some block-level items display as they would normally in jQuery.mobile
- **Tab bar not have to be located in the header**
- Content panels not have to be inside of the content area
- I hope to improve this sometime, or maybe the jQuery.mobile team will be able to use what I've got here to make something awesomer.

This being said, here's a sample of the usage:

	<div data-role="page" id="page-title">

		<div data-role="tabs">
			<ul>
				<li><a href="#tab-1" class="">Tab 1</a></li>
				<li><a href="#tab-2" class="">Tab 2</a></li>
			</ul>

			<div id="tab-1" data-role="tab-content">
				<h2>Here is the first tab</h2>
				<ul data-role="listview">
					<li>First item.</li>
					<li>Second item.</li>
				</ul>
			</div>

			<div id="tab-2" data-role="tab-content">
				<h2>Here is the second tab</h2>
				<p>Second tab content...</p>
			</div>
		</div>
	</div>

	<script type="text/javascript">
	//<!--
		var tabs = $(':jqmData(role="tabs")').tabs();
	//-->
	</script>