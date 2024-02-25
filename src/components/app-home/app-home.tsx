import { Component, State, h } from '@stencil/core';
import store from '../../store/store';
import { incrementCounter, decrementCounter } from '../../store/counterSlice';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {

  @State() counter: number = 0;

  connectedCallback() {
    store.subscribe(() => {
      this.counter = store.getState().counter.count
    })
  }

  render() {
    return (
      <div class="app-home">
        <p>
          Welcome to the Stencil App Starter. You can use this starter to build entire apps all with web components using Stencil! Check out our docs on{' '}
          <a href="https://stenciljs.com">stenciljs.com</a> to get started.
        </p>

        <button onClick={() => store.dispatch(incrementCounter())}>Increment</button>
        {this.counter}
        <button onClick={() => store.dispatch(decrementCounter())}>Decrement</button>

        <stencil-route-link url="/profile/stencil">
          <button>Profile page</button>
        </stencil-route-link>
      </div>
    );
  }
}
