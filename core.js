/**
 * tiny-state-core
 * A minimal composable state core
 */

class StateCore {
  constructor(initialState = {}) {
    this.state = initialState;
    this.listeners = [];
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.listeners.forEach(listener => listener(this.state));
  }

  getState() {
    return this.state;
  }
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = StateCore;
}
