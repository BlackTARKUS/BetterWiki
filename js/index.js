Vue.component('move-data-item', {
  props: ['locale', 'localization', 'move'],
  template: 
    `<div class="card" :index="move.activeVersion">

      <div class="card-tabs">
        <ul class="tabs tabs-fixed-width">
          <li class="tab" v-for="(version, tabindex) in move.versions" v-on:click="move.activeVersion = version.vid"><a href="#/">{{ version.name }}</a></li>
        </ul>
      </div>

      <div class="card-image">
        <div  class="card-video">
          <video v-if="move.versions[move.activeVersion].hasVideo" autoplay muted loop playsinline><source v-bind:src="'assets/video/GBVS_Gran_' + move.versions[move.activeVersion].input + '.mp4'" type="video/mp4"></video>
          <img v-else v-bind:src="'assets/img/move_images/GBVS_Gran_' + move.versions[move.activeVersion].input + '.webp'">
        </div>
        <span v-if="locale == 0" class="card-title">{{ move.rootName }} {{ move.versions[move.activeVersion].name }}</span>
        <span v-else class="card-title">{{ move.jpname }} {{ move.versions[move.activeVersion].name }}</span>
      </div>

      <div>
        <div class="flex-container">
        <div class="flex-item green-text"><span class="tooltipped underlined" data-tooltip="The time, measured in frames, which it takes for a move to become able to
        strike the opponent. Startup includes the frame on which the move becomes active.">{{ localization[locale].startup }}</span><br>{{ move.versions[move.activeVersion].startup }}</div>
        <div class="flex-item red-text"><span class="tooltipped underlined" data-tooltip="The  duration of time, measured in frames, during which a move is able to
        strike the opponent.">{{ localization[locale].active }}</span><br>{{ move.versions[move.activeVersion].active }}</div>
        <div class="flex-item blue-text"><span class="tooltipped underlined" data-tooltip="The time, measured in frames, following a move's active frames during
        which the user's actions are limited, either partially or entirely.">{{ localization[locale].recovery }}</span><br>{{ move.versions[move.activeVersion].recovery }}</div>
        <div class="flex-item"><span class="tooltipped underlined" data-tooltip="The type of guard which must be used to avoid getting hit by this move.versions[move.activeVersion].">{{ localization[locale].guard }}</span><br>{{ move.versions[move.activeVersion].guard }}</div>
        <div class="flex-item"><span class="tooltipped underlined" data-tooltip="The value by which the opponent's health will be reduced, ignoring 
        any reductions, when struck by this move.versions[move.activeVersion].">{{ localization[locale].damage }}</span><br>{{ move.versions[move.activeVersion].damage }}</div>
        <div class="flex-item"><span class="tooltipped underlined" data-tooltip="The amount of time, measured in frames, during which the attacker is able 
        to act before the opponent after the opponent succesfully guards against this attack. 
        Negative values indicate the player who guarded can act first.">{{ localization[locale].onBlock }}</span><br>{{ move.versions[move.activeVersion].onBlock }}</div>
        <div class="flex-item"><span class="tooltipped underlined" data-tooltip="The amount of time, measured in frames, during which the attacker is able
        to act before the opponent after succesfully striking the opponent with this attack.
        Negative values indicate the player who was struck can act first.">{{ localization[locale].onHit }}</span><br>{{ move.versions[move.activeVersion].onHit }}</div>
        <div class="flex-item"><span class="tooltipped underlined" data-tooltip="The type of invulnerability the attack grants against opposing attacks.">{{ localization[locale].invulnerability }}</span><br>{{ move.versions[move.activeVersion].invuln }}</div>
        </div>
      </div>

      <div class="card-content bordered-top" style="overflow-x: auto; overflow-y: hidden; padding: 4px; 2px">
        <svg
          height="12px" width="500px"
          xmlns="http://www.w3.org/2000/svg"
          :style="{ width: (move.versions[move.activeVersion].startup + move.versions[move.activeVersion].active + move.versions[move.activeVersion].recovery) * 14 + 8 + 'px'}"
        >
          <rect 
            v-for="(n, index) in (move.versions[move.activeVersion].startup - 1)" 
            width="12" height="12" fill="#36B37E" v-bind:x="(n*14)-8" y="0"
          ></rect>
          <rect 
            v-for="(n, index) in move.versions[move.activeVersion].active" 
            width="12" height="12" fill="#FF5D5D" v-bind:x="(n*14)+((move.versions[move.activeVersion].startup-1)*14)-8" y="0"
          ></rect>
          <rect 
            v-for="(n, index) in move.versions[move.activeVersion].recovery" 
            width="12" height="12" fill="#0069B6"
            v-bind:x="(n*14)+(move.versions[move.activeVersion].active*14)+((move.versions[move.activeVersion].startup-1)*14)-8" y="0"
          ></rect>
        </svg>
      </div>

      <div v-if="locale == 0" class="card-content bordered-top">
        {{ move.versions[move.activeVersion].description }}
      </div>
      <div v-else class="card-content bordered-top">
        {{ move.versions[move.activeVersion].jpdescription }}
      </div>

    </div>`
})

Vue.component('character-icon', {
  props: ['character'],
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
    locale: 0,
    localization: [
      {
        id: 0,
        lang: 'en',
        bw_app: 'Wiki-like app, now available in JP',
        home: 'Home',
        blog: 'Getting Started',
        wiki: 'Character Data',
        english: 'English',
        japanese: 'Japanese',
        plus: 'Plus',
        startup: 'Startup',
        active: 'Active',
        recovery: 'Recovery',
        guard: 'Guard',
        damage: 'Damage',
        onBlock: 'On-Block',
        onHit: 'On-Hit',
        invulnerability: 'Invulnerability'
      },
      {
        id: 1,
        lang: 'jp',
        bw_app: 'ウィキで日本語！',
        home: 'メインページ',
        blog: 'ブログ',
        wiki: 'ウィキ',
        english: '英語',
        japanese: '日本語',
        plus: '+',
        startup: '発生',
        active: '持続',
        recovery: '硬直',
        guard: 'ガード',
        damage: 'ダメージ',
        onBlock: 'ブロック時',
        onHit: 'ヒット時',
        invulnerability: '無敵'
      }
    ],
    moveList: [
      {
        id: 0,
        activeVersion: 0,
        rootName: 'Reginleiv',
        jpname: 'レギンレイヴ',
        versions: [
          {
            vid: 0,
            hasVideo: true,
            name: ' L',
            input: '236L',
            startup: 15,
            active: 1,
            recovery: 19,
            guard: 'High',
            damage: 800,
            onBlock: '-7',
            onHit: '-3',
            invuln: 'none',
            jpdescription: '飛び道具。',
            description: "Gran launches a fireball from the tip of his sword. The fireball will travel in a straight, horizontal path until it either hits something, or travels off screen. This move is commonly used to generate pressure from outside of normal attack range."
          },
          {
            vid: 1,
            hasVideo: true,
            name: ' M',
            input: '236M',
            startup: 13,
            active: 1,
            recovery: 29,
            guard: 'High',
            damage: '400, 800',
            onBlock: '-4',
            onHit: '0',
            invuln: 'none',
            jpdescription: 'M版は斬り上げ→飛び道具のコンビネーション。',
            description: "Gran performs a shot range melee attack before launching a fireball from the tip of his sword. The fireball will behave the same as the fireball launched by the L version. This version is especially useful in close range pressure because the initial sword swing can catch opponents during the startup of their attack."
          },
          {
            vid: 2,
            hasVideo: true,
            name: ' Plus',
            input: '236H',
            startup: 15,
            active: 1,
            recovery: 37,
            guard: 'High',
            damage: '350×3',
            onBlock: '+6',
            onHit: 'KD',
            invuln: 'none',
            jpdescription: '+版は3ヒットするので、近距離でガードされてもスキが小さい。',
            description: "The Plus variant of Reginleiv is similar to the L variant, but the projectile hits 3 times, and knocks down on hit. This version can be used to win projectile wars, extend combos, and blow through enemy armor."
          }
        ]
      },
      {
        id: 1,
        activeVersion: 0,
        rootName: 'Rising Sword',
        jpname: 'ライジングソード',
        versions: [
          {
            vid: 0,
            hasVideo: true,
            name: ' L',
            input: '623L',
            startup: 7,
            active: 8,
            recovery: 19,
            guard: 'High',
            damage: '700, 300',
            onBlock: '-17',
            onHit: 'KD',
            invuln: 'none',
            jpdescription: '無敵技。L版は出始めのみ空中ガード不能。',
            description: "Gran performs a jumping sword attack over his head. Gran is fully invulnerable during the startup of the attack. This version is the least unsafe, but not by much."
          },
          {
            vid: 1,
            hasVideo: true,
            name: ' M',
            input: '623M',
            startup: 7,
            active: 14,
            recovery: 29,
            guard: 'High',
            damage: '700, 300×2',
            onBlock: '-26',
            onHit: 'KD',
            invuln: 'none',
            jpdescription: 'M版は2連続のライジングソード。最初のライジングソードが空中ガードで防ぐことができないので、対空技としても役立つぞ。',
            description: "The M version of Rising Sword is a standard combo ender for damage."
          },
          {
            vid: 2,
            hasVideo: true,
            name: ' Plus',
            input: '623H',
            startup: 7,
            active: 22,
            recovery: 37,
            guard: 'High',
            damage: '900~1400',
            onBlock: '-26',
            onHit: 'HKD',
            invuln: 'none',
            jpdescription: '無敵技。+版は出始めのみ空中ガード不能。',
            description: "Gran performs two jumping sword attacks over his head. The Plus variant is invulnerable through the first jump, but not the second. Rising Sword Plus will hit the opponent 4 times which can be useful for beating okizeme, or blasting through an opponent's armor."
          }
        ]
      },
      {
        id: 2,
        activeVersion: 0,
        rootName: 'Overdrive Surge',
        jpname: 'ドライブバースト',
        versions: [
          {
            vid: 0,
            hasVideo: true,
            name: ' L',
            input: '214L',
            startup: 13,
            active: 2,
            recovery: 19,
            guard: 'High',
            damage: 700,
            onBlock: '-6',
            onHit: '-2',
            invuln: 'none',
            jpdescription: '突進技。L版はガードされてもスキが小さく、追加攻撃に派生可能。',
            description: "Gran dashes forward with a slash. Overdrive Surge L is the safest variant of Overdrive Surge at close range. This mvoe can cancel into Overdrive Surge M on hit or block. On hit, 214L > 214M serves as his standard meterless combo ender. On block this move can be used to test your opponent's willingness to mash after 214L lest they risk a counter hit 214M."
          },
          {
            vid: 1,
            hasVideo: true,
            name: ' M',
            input: '214M',
            startup: 16,
            active: 13,
            recovery: 29,
            guard: 'High',
            damage: 1200,
            onBlock: '-10',
            onHit: 'KD',
            invuln: 'none',
            jpdescription: '突進技。M版は蹴り技の突進攻撃で、先端をガードさせると反撃を受けにくい。',
            description: "Gran performs a leaping kick. Overdrive Surge M moves Gran significantly forward. The fruther away from which this move is used, thus hitting with the later active frames, the better the frame advantage is."
          },
          {
            vid: 2,
            hasVideo: true,
            name: ' Plus',
            input: '214H',
            startup: 13,
            active: 13,
            recovery: 37,
            guard: 'High',
            damage: 1200,
            onBlock: '-8',
            onHit: 'HKD',
            invuln: 'none',
            jpdescription: '突進技。+版は蹴り技の突進攻撃で、先端をガードさせると反撃を受けにくい。遠距離から奇襲を狙おう。',
            description: "The Plus variant of Overdrive Surge is similar to the M variant, but starts up faster, causes a hard knockdown, and will wall-bounce the opponent if it connects near the corner. This version has utility both in neutral and in combos due to the wall-bounce and improved frame data."
          }
        ]
      }
    ]
  }
})
