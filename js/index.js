Vue.component('move-data-item', {
  props: ['move'],
  template: 
    `<div class="card">
      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab"><a href="#" @click="changeVersion" class="active">Light</a></li>
          <li class="tab"><a href="#" @click="changeVersion">Medium</a></li>
          <li class="tab"><a href="#" @click="changeVersion">Plus</a></li>
        </ul>
      </div>
      <div class="card-image">
        <div  class="card-video">
          <video v-if="move.hasVideo" autoplay muted loop playsinline><source v-bind:src="'assets/video/GBVS_Gran_' + move.input + '.mp4'" type="video/mp4"></video>
          <img v-else v-bind:src="'assets/img/move_images/GBVS_Gran_' + move.input + '.webp'">
        </div>
        <span class="card-title">{{ move.name }}</span>
      </div>
      <div>
        <div class="flex-container">
        <div class="flex-item green-text"><span class="tooltipped underlined" data-tooltip="The time, measured in frames, which it takes for a move to become able to
        strike the opponent. Startup includes the frame on which the move becomes active.">Startup</span><br>{{ move.startup }}</div>
        <div class="flex-item red-text"><span class="tooltipped underlined" data-tooltip="The  duration of time, measured in frames, during which a move is able to
        strike the opponent.">Active</span><br>{{ move.active }}</div>
        <div class="flex-item blue-text"><span class="tooltipped underlined" data-tooltip="The time, measured in frames, following a move's active frames during
        which the user's actions are limited, either partially or entirely.">Recovery</span><br>{{ move.recovery }}</div>
        <div class="flex-item"><span class="tooltipped underlined" data-tooltip="The type of guard which must be used to avoid getting hit by this move.">Guard</span><br>{{ move.guard }}</div>
        <div class="flex-item"><span class="tooltipped underlined" data-tooltip="The value by which the opponent's health will be reduced, ignoring 
        any reductions, when struck by this move.">Damage</span><br>{{ move.damage }}</div>
        <div class="flex-item"><span class="tooltipped underlined" data-tooltip="The amount of time, measured in frames, during which the attacker is able 
        to act before the opponent after the opponent succesfully guards against this attack. 
        Negative values indicate the player who guarded can act first.">On-Block</span><br>{{ move.onBlock }}</div>
        <div class="flex-item"><span class="tooltipped underlined" data-tooltip="The amount of time, measured in frames, during which the attacker is able
        to act before the opponent after succesfully striking the opponent with this attack.
        Negative values indicate the player who was struck can act first.">On-Hit</span><br>{{ move.onHit }}</div>
        <div class="flex-item"><span class="tooltipped underlined" data-tooltip="The type of invulnerability the attack grants against opposing attacks.">Invulnerabilty</span><br>{{ move.invuln }}</div>
        </div>
      </div>
      <div class="card-content bordered-top" style="overflow-x: auto; overflow-y: hidden; padding: 4px; 2px">
        <svg
          height="12px" width="500px"
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
      <div class="card-content bordered-top">
        {{ move.description }}
      </div>
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
    `<span v-bind:character="character">
      <a target="_Blank" v-bind:href="'https://www.dustloop.com/wiki/index.php?title=GBVS/' + character">
        <img
          class="characterIcon"
          v-bind:src="'assets/img/character_icons/' + character + '.webp'"
          loading="lazy" 
          link="'https://www.dustloop.com/wiki/index.php?title=GBVS/' + character"
          v-bind:alt="character + ' Icon'"
        >
        {{ character }}</a>
    </span>`
})

var vm = new Vue({
  el: '#app',
  data: {
    moveList: [
      {
        id: 0,
        name: 'Rising Sword L',
        input: '623L',
        startup: 7,
        active: 8,
        recovery: 22,
        guard: 'high',
        damage: "700, 300",
        onBlock: '-17',
        onHit: 'KD',
        hasVersions: 'true',
        hasVideo: true,
        invuln: 'full',
        description: `Gran performs a jumping sword attack over his head. Gran is fully invulnerable during the startup of the attack.`
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
        hasVersions: true,
        hasVideo: true,
        invuln: 'none',
        description: `Gran dashes forward with a slash. Overdrive Surge L is the safest variant of
        Overdrive Surge at close range. This mvoe can cancel into Overdrive Surge M on hit or block.
        On hit, 214L > 214M serves as his standard meterless combo ender. On block this move can be
        used to test your opponent's willingness to mash after 214L lest they risk a counter hit 
        214M.`
      },
      {
        id: 2,
        name: 'Reigenleiv L',
        input: '236L',
        startup: 15,
        active: 1,
        recovery: 29,
        guard: 'high',
        damage: 1200,
        onBlock: '-6',
        onHit: '-3',
        hasVersions: true,
        hasVideo: true,
        invuln: 'none',
        description: `Gran launches a fireball from the tip of his sword. The fireball will travel in a straight, horizontal path until it either hits something, or travels off screen. 
        This move is commonly used to generate pressure from outside of normal attack range.`
      }
    ]
  }
})