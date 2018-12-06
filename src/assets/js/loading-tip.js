/**
 * The global loading library
 * @type {{getLoading: (function(*=): *)}}
 */
const loadingTip = (() => {
  class loadingGlobal {
    constructor () {
      this.loading = this.addLoading();
    };

    addLoading () {
      const loading = document.createElement("div");
      loading.className = 'loading-mask';
      loading.style.display = 'none';
      loading.innerHTML = `
      <div class="loading-spinner">
            <div class="loading-circle">
                <div class="spinner-container container1">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
                <div class="spinner-container container2">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
                <div class="spinner-container container3">
                    <div class="circle1"></div>
                    <div class="circle2"></div>
                    <div class="circle3"></div>
                    <div class="circle4"></div>
                </div>
            </div>
        </div>
    `;

      document.body.appendChild(loading, document.body.firstElementChild);
      return loading;
    };

    open () {
      this.loading.style.display = 'block';
      this.loading.style.opacity = '1';
    };

    close () {
      this.loading.style.opacity = '0';
      setTimeout(() => {
        this.loading.style.display = 'none';
      }, 300);
    };
  }

  let instance;
  let _static = {
    getLoading: (options) => {
      if (instance === undefined) {
        instance = new loadingGlobal(options);
      }

      return instance;
    }
  };

  return _static;
})();

export default loadingTip;
