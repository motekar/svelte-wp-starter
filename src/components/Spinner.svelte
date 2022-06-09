<script>
  import classnames from "classnames";

  export let size;
</script>

<div
  class={classnames({
    spinner__container: true,
    ["spinner-" + size]: size,
  })}
>
  <div class="spinner__item" />
</div>

<style lang="scss">
  @import "@wordpress/base-styles/colors";

  .spinner__container {
    display: inline-block;
    position: relative;
  }

  .spinner__item {
    position: absolute;
    left: 10px;
    top: -25px;
    display: block;
    width: 40px;
    height: 40px;
    background-color: $gray-900;

    border-radius: 100%;
    -webkit-animation: scaleout 1s infinite ease-in-out;
    animation: scaleout 1s infinite ease-in-out;
  }

  @-webkit-keyframes scaleout {
    0% {
      -webkit-transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }

  @keyframes scaleout {
    0% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
      opacity: 0;
    }
  }

  .spinner-small {
    .spinner__item {
      width: 20px;
      height: 20px;
      top: -15px;
      left: 5px;
    }
  }
</style>
