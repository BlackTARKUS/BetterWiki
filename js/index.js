Vue.component('move-data-item', {
  props: ['move'],
  template: 
    `<div class="card">
      <div class="card-title">{{ move.name }}</div>
      <img 
        v-bind:src="'assets/img/GBVS_Move_Images/GBVS_Gran_' + move.input + '.webp'"
        class="card-img"
        v-bind:alt="move.name"
      >
      <div class="card-data">
        <div class="Startup">
          <span
            class="features simptip-position-top simptip-smooth simptip-multiline simptip-movable"
            data-tooltip="The time, measured in frames, which it takes for a move to become able to
            strike the opponent. Startup includes the frame on which the move becomes active."
          >
            Startup
          </span>
        </div>
        <div class="Active">
          <span
            class="features simptip-position-top simptip-smooth simptip-multiline simptip-movable"
            data-tooltip="The  duration of time, measured in frames, during which a move is able to
            strike the opponent."
          >
            Active
          </span>
        </div>
        <div class="Recovery">
          <span
            class="features simptip-position-top simptip-smooth simptip-multiline simptip-movable"
            data-tooltip="The time, measured in frames, following a move's active frames during
            which the user's actions are limited, either partially or entirely."
          >
            Recovery
          </span>
        </div>
        <div>
          <span
            class="features simptip-position-top simptip-smooth simptip-multiline simptip-movable"
            data-tooltip="The type of guard which must be used to avoid getting hit by this move."
          >
            Guard
          </span>
        </div>
        <div>
          <span
            class="features simptip-position-top simptip-smooth simptip-multiline simptip-movable"
            data-tooltip="The value by which the opponent's health will be reduced, ignoring 
            any reductions, when struck by this move."
          >
            Damage
          </span>
        </div>
        <div class="On-Block">
          <span
            class="features simptip-position-top simptip-smooth simptip-multiline simptip-movable"
            data-tooltip="The amount of time, measured in frames, during which the attacker is able 
            to act before the opponent after the opponent succesfully guards against this attack. 
            Negative values indicate the player who guarded can act first."
          >
            On-Block
          </span>
        </div>
        <div class="On-Hit">
          <span
            class="features simptip-position-top simptip-smooth simptip-multiline simptip-movable"
            data-tooltip="The amount of time, measured in frames, during which the attacker is able
            to act before the opponent after succesfully striking the opponent with this attack.
            Negative values indicate the player who was struck can act first."
          >
            On-Hit
          </span>
        </div>
        <div>{{ move.startup }}</div>
        <div>{{ move.active }}</div>
        <div>{{ move.recovery }}</div>
        <div>{{ move.guard }}</div>
        <div>{{ move.damage }}</div>
        <div>{{ move.onBlock }}</div>
        <div>{{ move.onHit }}</div>
      </div>
      <svg v-if="(move.startup + move.active + move.recovery) < 50" class="card-chart">
        <rect 
          v-for="(n, index) in (move.startup - 1)" 
          width="12" height="12" fill="green" v-bind:x="(n*14)-8" y="0"
        ></rect>
        <rect 
          v-for="(n, index) in move.active" 
          width="12" height="12" fill="red" v-bind:x="(n*14)+((move.startup-1)*14)-8" y="0"
        ></rect>
        <rect 
          v-for="(n, index) in move.recovery" 
          width="12" height="12" fill="blue" v-bind:x="(n*14)+(move.active*14)+((move.startup-1)*14)-8" y="0"
        ></rect>
      </svg>
      <div v-else class="card-line">Frame data too long to draw!</div>
      <div class="card-description">{{ move.description }}</div>
    </div>`
})

Vue.component('character-icon', {
  props: {
    character: {
      type: String,
      required: true
    }
  },
  template: 
    `<span class="characterIcon" v-bind:character="character">
      <img 
        v-bind:src="'assets/img/GBVS_Character_Icons/' + character + '.webp'" 
        loading="lazy" 
        v-bind:alt="character + ' Icon'"
      >
      <a v-bind:href="'https://www.dustloop.com/wiki/index.php?title=GBVS/' + character">
        {{ character }}
      </a>
    </span>`
})

var vm = new Vue({
  el: '#app',
  data: {
    moveList: [
      {
        id: 0,
        name: 'fL',
        input: 'fL',
        startup: 6,
        active: 3,
        recovery: 13,
        guard: 'high',
        damage: 700,
        onBlock: '-3',
        onHit: '+1',
        description: `Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Iure dolores harum
          exercitationem quasi quas asperiores unde maxime libero quod officia, accusamus adipisci 
          voluptatibus consectetur placeat, saepe eius ducimus corporis nobis.`
      },
      {
        id: 1,
        name: 'Overdrive Surge',
        input: '214L',
        startup: 13,
        active: 2,
        recovery: 19,
        guard: 'high',
        damage: 700,
        onBlock: '-6',
        onHit: '-2',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, officiis.
          Corporis hic doloremque quis, possimus sed itaque voluptates, earum culpa nesciunt 
          voluptas harum! Exercitationem, aut? Debitis laudantium dignissimos sint doloremque!`
      },
      {
        id: 2,
        name: 'Overdrive Surge',
        input: '214M',
        startup: 16,
        active: 13,
        recovery: 29,
        guard: 'high',
        damage: 1200,
        onBlock: '-10',
        onHit: 'KD',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, officiis.
          Corporis hic doloremque quis, possimus sed itaque voluptates, earum culpa nesciunt 
          voluptas harum! Exercitationem, aut? Debitis laudantium dignissimos sint doloremque!`
      }
    ]
  }
})