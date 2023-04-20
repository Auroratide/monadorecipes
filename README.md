# Monado Recipes

**Visit the site at [monado.recipes](https://monado.recipes)!**

Monado Recipes is a fan-made repository of recipes based on food found in the [Xenoblade Chronicles](https://xenoblade.fandom.com/wiki/Xenoblade_Wiki) games.

Really, it's one big creative culinary exercise: how do you take fantasy ingredients like "Mookah Flour" and create a "Pan-Fried Tartari"? What even is a tartari anyway?

We reimagine the game's recipes as real things you can cook. If you're a fan of the games or are perhaps just looking to serve something a little different, then try one of our Monado Recipes!

## Development

Monado Recipes is built with [SvelteKit](https://kit.svelte.dev/) statically hosted via [Github Pages](https://pages.github.com/). The website is simple, so the tech stack is simple! A journey test may be added in the future.

If you wanna help out, feel free to make a [pull request](https://github.com/Auroratide/monadorecipes/pulls)!

```
# Install dependencies
pnpm install

# Run the app
pnpm dev
```

## Design System Principles

The UI is based off the menus of Xenoblade Chronicles 2.

Something of note is that not everything within the design system is a traditional "component". Some things, such as [TriangleCorners](src/lib/design/TriangleCorners/TriangleCorners.ts), is a **Presentational Primitive**. Which is a term I just now made up.

Let's talk about that.

### Presentational Semantics

There's something nice and, dare I say, _readable_ about the following markup:

```html
<h2 class="font-size-3-star triangle-corners triangle-corners-right color-bg-shiny">
```

Without even looking at CSS, I can understand that this element probably has a medium-sized font, a triangular corner on the right side, and a gradient background of some kind. What's more, the presentation is _decoupled_ from the actual tag used. The following might render nearly exactly the same thing, but with a different accessible semantic:

```html
<p class="font-size-3-star triangle-corners triangle-corners-right color-bg-shiny">
```

This is a core principle of **utility-first design**: document semantics and presentation semantics are _different_, and therefore we have different tools to express each:

* We use HTML tags (`h1`, `p`, `blockquote`) for document semantics.
* We use CSS class names (`font-size-3-star`, `color-text-regular`) for presentation semantics.

### Presentational Primitives

A **presentational primitive** is a _configurable CSS class_.

```svelte
<h2 class="{Font.size.stars(3)} {TriangleCorners({ type: "right" })}">
```

For instance, `Font.size.stars(3)` becomes `font-size-3-star`, which is defined in CSS as:

```css
.font-size-3-star {
	font-size: clamp(1.125rem, 2.25vw, 1.29375rem);
}
```

Using typescript as the surface area for the CSS classes allows the design system to be both discoverable and finite. And since we're using CSS classes, a single HTML tag can be decorated with multiple primitives.

### What about components?

Components are not just useful, but necessary!

After all, if I have a title that is composed of four different classes, it would be annoying (not just annoying, but _wrong_) to repeat them everywhere I need that kind of title. Components do a few things:

* They create _reusability_ out of a composition of presentational primitives.
* They create _new document semantics_ that represent your design better than individual HTML tags do.
* They create _interactivity_ for when you need something more than static stuff on a page.

For example, the [QuestPanel](src/lib/design/QuestPanel/QuestPanel.svelte) component combines an image with some text on a light background:

```svelte
<section class="{Color.background.light()} {Color.text.dark()} {Elevated()} padded column">
	<div class="{Elevated()} small-max-width">
		<slot name="image"></slot>
	</div>
	<div class="{Font.size.stars(2)} lined">
		<slot></slot>
	</div>
</section>
```

I like the principles of [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/): that is, you can think of a design system of being a set of _atoms_, which compose _molecules_, which compose _organisms_.

The atoms are the presentation primitives. Together they build components, and components are used to build pages.
