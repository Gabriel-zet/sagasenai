<template>
    <div class="wrap">
      <ul class="carousel" :class="{ 'is-reversing': isReversing, 'is-set': !isReversing }" ref="carousel">
        <li v-for="(item, index) in items" :key="index" class="carousel-seat" :class="{ 'is-ref': index === activeIndex }">
          <h2>{{ item }}</h2>
        </li>
      </ul>
      <div class="controls">
        <button class="toggle" data-toggle="prev" @click="toggleHandler('prev')">Prev</button>
        <button class="toggle" data-toggle="next" @click="toggleHandler('next')">Next</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
  data() {
    return {
      items: ['1', '2', '3', '4', '5', '6'],
      activeIndex: 5,
      isReversing: false,
    };
  },
  methods: {
    toggleHandler(direction) {
      const isNext = direction === 'next';
      this.isReversing = !isNext;
      this.activeIndex = isNext ? this.nextIndex(this.activeIndex) : this.prevIndex(this.activeIndex);
    },
    nextIndex(index) {
      const nextIndex = Math.min(index + 1, this.items.length - 1);
      return (nextIndex % this.items.length + 1) % this.items.length;
    },
    prevIndex(index) {
      return (index - 1 + this.items.length) % this.items.length;
    },
  },
};
  </script>
  
  <style scoped>
  .wrap {
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
  }
  
  .carousel {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    position: relative;
    transform: translateX(0);
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel.is-reversing {
    transform: translateX(0%);
  }
  
  .carousel.is-set {
    transform: translateX(-100%);
  }
  
  .carousel-seat {
    background: #ddd;
    flex: 1 0 100%;
    order: 2;
  }
  
  .carousel-seat:nth-child(even) {
    background: #d5d5d5;
  }
  
  @media (min-width: 30em) {
    .carousel-seat {
      flex-basis: 50%;
    }
  }
  
  @media (min-width: 40em) {
    .carousel-seat {
      flex-basis: 33.33333%;
    }
  }
  
  .carousel-seat.is-ref {
    order: 1;
  }
  
  h2 {
    color: #aaa;
    font-size: 7em;
    font-weight: normal;
    margin: 0;
    padding: 0.6em 0;
    text-align: center;
  }
  
  .controls {
    padding: 1em;
    text-align: center;
  }
  
  .controls button {
    background: #aaa;
    border: 0;
    border-radius: 0.25em;
    color: #eee;
    padding: 0.5em 1em;
    cursor: pointer;
  }
  
  .controls button:hover,
  .controls button:focus {
    background: orange;
  }
  </style>
  