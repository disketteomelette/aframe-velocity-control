// aframe-velocity-control.js - github.com/disketteomelette
// Licensed under Creative Commons Attribution 4.0 International (CC BY 4.0)
// You are free to share and adapt this script, giving appropiate credit to author and 
// indicating if changes were made, without any other additional restrictions ;)

    AFRAME.registerComponent('velocity-control', {
      schema: {
        target: { type: 'selector' },
        factor: { type: 'number', default: 1.5 },
        type: { type: 'string', default: 'increase' },
      },
      init: function () {
        this.el.addEventListener('mouseenter', this.onMouseEnter.bind(this));
        this.el.addEventListener('mouseleave', this.onMouseLeave.bind(this));
        this.el.addEventListener('click', this.onClick.bind(this));
      },
      onMouseEnter: function () {
        this.el.setAttribute('animation', { property: 'scale', to: '0.3 0.3 0.2', dur: 200 });
      },
      onMouseLeave: function () {
        this.el.setAttribute('animation', { property: 'scale', to: '0.2 0.2 0.1', dur: 200 });
      },
      onClick: function () {
        var target = this.data.target;
        var animation = target.getAttribute('animation');
        var speed = animation.dur;
        if (this.data.type === 'increase') {
          speed = speed / this.data.factor;  
        } else if (this.data.type === 'decrease') {
          speed = speed * this.data.factor;
        } 
        target.setAttribute('animation', {
          property: animation.property,
          dir: animation.dir,
          dur: speed,
          easing: animation.easing,
          from: animation.from,
          to: animation.to,
          loop: true
        });
      }
    });  