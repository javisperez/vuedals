## DEMO

[View demo on jsFiddle](https://jsfiddle.net/ackqudv7/1/)

## Vuedals v1.0.0

Multiple modals windows in a single component instance.

### What is this?

A plugin to open stocked modals windows, event based, with just one component in your DOM.

### What do you mean with "just one component"?

e.g. if you want to have 3 modals, you don't need to add the component 3 times, just one (preferably in the root of your app) and open as many modals as you want by using an Event Bus

## Example

```js
import Vue from 'vue';
import {Vuedals, Bus as VuedalsBus} from 'vuedals';

Vue.use(Vuedals);

var myComp = Vue.extend({
	template: `<div>
	        <h1>Hello World!</h1>
			<button @click="showIt()">Show me the money</button>
	    </div>`,
	
	methods: {
		showIt() {
			VuedalsBus.$emit('new', {
				name: 'showing-the-money',

				component: {
					name: 'the-money',

					template: `
						<div>
							<h1>THE MONEY!</h1>
							<p>Money, money, money, moooneeyyy $ $ $ $</p>
						</div>
					`
				}
			});
		}
	}
});

var vm = new Vue({
	el: '#app',
	
	components: {myComp},
	
	template: `<div>
	    <my-comp></my-comp>
	</div>`
});
```

## Usage

### Opening a new modal window

You can emit an event in your component:

```js
this.$emit('vuedals:new', { option });
```

or a method:

```js
this.$vuedals.new({ options });
```

or the Vuedals Event Bus:

```js
import {Bus as Vuedals} from 'vuedals';

...

methods: { 
	openNewModal() {
		Vuedals.$emit('new', { options });
	}
}
```

### Closing a modal

You can emit an event in your component:

```js
this.$emit('vuedals:close'**[, index]**);
```

a method:

```js
this.$vuedals.close(**[index]**);
```

or the Vuedals Event Bus:

```js
import {Bus as Vuedals} from 'vuedals';

...

methods: { 
	openNewModal() {
		Vuedals.$emit('close'**[, index]**);
	}
}
```

**For all these examples, the index number is optional**

### Events

Depending if you're creating the modal *from the component* or *from the Vuedals Event Bus*, these are the events (component / bus):

##### vuedals:new / new
Open a new modal window, with the given options

##### vuedals:close / close
Close a modal window, if an index is given, will close that modal number. If no index is given, will close the most recent modal

#### vuedals:opened / opened
When a modal was open. Returns an object with:

1. The index of the recently opened modal
2. The data of the recentyl opened modal (i.e. the options)

#### vuedals:closed / closed
When a modal was closed. Returns an object with:

#### vuedals:destroyed / destroyed
Emitted when the last modal instance is closed. *i.e. there's not more open modals left*

1. The index of the closed modal
2. The data of the closed modal (i.e. the options)

### Options

When creating a new modal, you'll need to pass the given options:

#### name
A reference name of the modal. Use to define the css class of that modal

*Default: null*

#### component
A Vue component to display inside the modal

#### props
A props object that will be passed to the component inside the modal, with the name "**props**".

example:

```js
import {Bus as Vuedals} from 'vuedals';

...

methods: {
	openModal() {
		this.$vuedals.open({
			name: 'test-component',

			props: {
				firstname: 'John',
				lastname: 'Doe'
			},

			component: {
				name: 'show-john-doe',

				// Important, the name of the prop is "props"
				props: ['props'],

				template: `
					<div>
						Hi {{ props.firstname }} {{ props.lastname }}
					</div>
				`
			}
		});
	}	
}
```

#### size
The size of the modal.

Possible values are:
- **sm**: 550px width
- **md**: 650px width
- **lg**: 850px width
- **xl**: 1024px width

*Default: md*

#### dismissable
Should the modal include an "X" to be closed?

*Default: true*

#### title
Title of the modal window

*Default: ''*

