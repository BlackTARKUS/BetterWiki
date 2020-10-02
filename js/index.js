Vue.component('move-data-item', {
  props: ['move'],
  template: 
    `<div class="card">
      <div class="card-title">
        {{ move.name }}
        <div class="subtitle" v-if="move.isSpecial == 'yes'">{{ move.input }}</div>
      </div>
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
      <div class="card-chart-container">
        <svg
          xmlns="http://www.w3.org/2000/svg" 
          :style="{ width: (move.startup + move.active + move.recovery) * 14 + 8 + 'px'}"
        >
          <rect 
            v-for="(n, index) in (move.startup - 1)" 
            width="12" height="12" fill="#36B37E" v-bind:x="(n*14)-8" y="0"
          ></rect>
          <rect 
            v-for="(n, index) in move.active" 
            width="12" height="12" fill="#FF5D5D" v-bind:x="(n*14)+((move.startup-1)*14)-8" y="0"
          ></rect>
          <rect 
            v-for="(n, index) in move.recovery" 
            width="12" height="12" fill="#0069B6"
            v-bind:x="(n*14)+(move.active*14)+((move.startup-1)*14)-8" y="0"
          ></rect>
        </svg>
      </div>
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
        name: 'f.L',
        input: 'fL',
        startup: 6,
        active: 3,
        recovery: 13,
        guard: 'high',
        damage: 700,
        onBlock: '-3',
        onHit: '+1',
        isSpecial: 'no',
        description: `Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Iure dolores harum
          exercitationem quasi quas asperiores unde maxime libero quod officia, accusamus adipisci 
          voluptatibus consectetur placeat, saepe eius ducimus corporis nobis.`
      },
      {
        id: 1,
        name: 'Overdrive Surge L',
        input: '214L',
        startup: 13,
        active: 2,
        recovery: 19,
        guard: 'high',
        damage: 700,
        onBlock: '-6',
        onHit: '-2',
        isSpecial: 'yes',
        description: `Gran dashes forward with a slash. Overdrive Surge L is the safest variant of
        Overdrive Surge at close range. This mvoe can cancel into Overdrive Surge M on hit or block.
        On hit, 214L > 214M serves as his standard meterless combo ender. On block this move can be
        used to test your opponent's willingness to mash after 214L lest they risk a counter hit 
        214M.`
      },
      {
        id: 2,
        name: 'Overdrive Surge M',
        input: '214M',
        startup: 16,
        active: 13,
        recovery: 29,
        guard: 'high',
        damage: 1200,
        onBlock: '-10',
        onHit: 'KD',
        isSpecial: 'yes',
        description: `Gran dashes forward with his foot out. Overdrive Surge M covers a lot of 
          horizontal space in front of the user. At point blank, Gran is punishable after hitting
          the opponent with this move. At farther distances, however, it becomes safe or even
          advantageous due to the frame advantage gained by hitting with the latest active frames of
          the attack. On counter hit Overdrive Surge M causes a wall bounce allowing for additional 
          follows up.`
      }
    ]
  }
})