# List Inline

The Predix Experience List Inline module simply displays a list as one horizontal row. This module is a fork of the [inuitcss list-inline module](https://github.com/inuitcss/objects.list-inline).

## Dependencies

Px’s List Inline Module depends on two other Px and inuitcss modules:

* [settings.defaults](https://github.com/inuitcss/settings.defaults)
* [px-functions-design](https://github.sw.ge.com/PXd/px-functions-design)

## Installation

Install this module and its dependencies using bower:

    bower install --save https://github.sw.ge.com/PXd/px-list-inline-design.git

Once installed, `@import` into your project's Sass file in its Objects layer:

    @import "../px-list-inline-design/objects.list-inline";

See [px-getting-started](https://github.sw.ge.com/PXd/px-getting-started#a-note-about-relative-import-paths) for an explanation of the `../`

## Import once

All rulesets are wrapped in the following `@if` statement:

    @if import-once('objects.list-inline') { ... }

## Usage

These flags are available and, if needed, should be set to `true` prior to importing the module:

    $inuit-enable-list-inline--delimited

This variable can be customized:

    $inuit-list-inline-delimit-character

Basic usage of the List Inline module uses one required class:

    <ul class="list-inline">
        <li>Foo</li>
        <li>Bar</li>
        <li>Baz</li>
    </ul>

The only valid children of the `.list-inline` node are `<li>`s.

## Options

Another, optional, class can supplement the required base class:

* `.list-inline--delimited`: add a character to delimit list items.

For example:

    <ul class="list-inline list-inline--delimited">
        <li>Foo</li>
        <li>Bar</li>
        <li>Baz</li>
    </ul>

If you wish to completely remove the whitespace between items, omit the closing
`</li>` tag:

    <ul class="list-inline">
        <li>Foo
        <li>Bar
        <li>Baz
    </ul>
