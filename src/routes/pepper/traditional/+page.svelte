<script lang="ts">
  import Player from '$lib/components/Player.svelte'
  import Volleyball from '$lib/components/Volleyball.svelte'
  import anime from 'animejs'
  import { Button, Range } from 'flowbite-svelte'
  import { AngleDownOutline } from 'flowbite-svelte-icons'
  import { onMount } from 'svelte'

  const UpEasingY = 'easeOutQuad'
  const DownEasingY = 'easeInQuad'
  const PlayerEasingX = 'easeInOutQuad'
  const BallEasingX = 'linear'

  let Ball1DefaultPos = { x: 250, y: 900, size: 120, opacity: 1 }
  let Player1DefaultPos = { x: 0, y: 1000, size: 400, opacity: 1 }
  let Player2DefaultPos = { x: 2650, y: 1000, size: 400, opacity: 1 }
  const Player1SetPos = { x: 750, y: 1000, size: 400, opacity: 1 }
  const Player2SetPos = { x: 1650, y: 1000, size: 400, opacity: 1 }
  const Player1BallSetPoint = { x: 1000, y: 1000, size: 400, opacity: 1 }
  const Player2BallSetPoint = { x: 1650, y: 1000, size: 400, opacity: 1 }
  const Player1BallHitPoint = { x: 250, y: 900, size: 120, opacity: 1 }
  const Player2BallHitPoint = { x: 2600, y: 900, size: 120, opacity: 1 }
  const Player1BallDigPoint = { x: 350, y: 1100, size: 120, opacity: 1 }
  const Player2BallDigPoint = { x: 2550, y: 1100, size: 120, opacity: 1 }
  const BallTopPoint = 400

  let HitSpeed
  let DigSpeed

  $: HitDuration = 800
  $: DigDuration = 2000

  let TimelineRangeValue: number = 0

  let TimeLine: anime.AnimeTimelineInstance
  onMount(() => {
    var TimeLineRangeElement = document.querySelector(
      '#TimelineRangeElement'
    ) as HTMLInputElement
    if (TimeLineRangeElement) {
      TimeLineRangeElement.oninput = function () {
        TimeLine.seek(
          TimeLine.duration * (parseFloat(TimeLineRangeElement.value) / 100)
        )
      }
    }

    TimeLine = anime
      .timeline({
        duration: 750,
        autoplay: false,
        loop: true,
        update: function (anim) {
          TimeLineRangeElement.value = anim.progress.toString()
        },
      })
      .add(
        {
          // First hit - ball movement x
          targets: '#Ball1',
          easing: BallEasingX,
          x: Player2BallDigPoint.x,
          duration: HitDuration,
        },
        0
      )
      .add(
        {
          // First hit - ball movement y
          targets: '#Ball1',
          easing: DownEasingY,
          y: Player2BallDigPoint.y,
          duration: HitDuration,
        },
        0
      )
      .add(
        {
          targets: '#Ball1',
          easing: UpEasingY,
          y: BallTopPoint,
          duration: DigDuration / 2,
        },
        HitDuration
      )
      .add(
        {
          targets: '#Ball1',
          easing: DownEasingY,
          y: Player1BallSetPoint.y,
          duration: DigDuration / 2,
        },
        HitDuration + DigDuration / 2
      )
      .add(
        {
          targets: '#Ball1',
          easing: BallEasingX,
          x: Player1BallSetPoint.x,
          duration: DigDuration,
        },
        HitDuration
      )
      .add(
        {
          targets: '#Player1',
          easing: PlayerEasingX,
          x: Player1SetPos.x,
          duration: DigDuration,
        },
        HitDuration
      )
      .add(
        {
          targets: '#Player1',
          easing: PlayerEasingX,
          x: Player1DefaultPos.x,
          duration: DigDuration,
        },
        HitDuration + DigDuration + 200
      )
      .add(
        {
          targets: '#Ball1',
          easing: BallEasingX,
          x: Player2BallHitPoint.x,
          duration: DigDuration,
        },
        HitDuration + DigDuration
      )
      .add(
        {
          targets: '#Ball1',
          easing: UpEasingY,
          y: BallTopPoint,
          duration: DigDuration / 2,
        },
        HitDuration + DigDuration
      )
      .add(
        {
          targets: '#Ball1',
          easing: DownEasingY,
          y: Player2BallHitPoint.y,
          duration: DigDuration / 2,
        },
        HitDuration + DigDuration + DigDuration / 2
      )
      .add(
        {
          targets: '#Ball1',
          easing: DownEasingY,
          y: Player1BallDigPoint.y,
          duration: HitDuration,
        },
        HitDuration + DigDuration + DigDuration
      )
      .add(
        {
          targets: '#Ball1',
          easing: BallEasingX,
          x: Player1BallDigPoint.x,
          duration: HitDuration,
        },
        HitDuration + DigDuration + DigDuration
      )
      .add(
        {
          targets: '#Ball1',
          easing: BallEasingX,
          x: Player2BallSetPoint.x,
          duration: DigDuration,
        },
        HitDuration + DigDuration + DigDuration + HitDuration
      )
      .add(
        {
          targets: '#Ball1',
          easing: UpEasingY,
          y: BallTopPoint,
          duration: DigDuration / 2,
        },
        HitDuration + DigDuration + DigDuration + HitDuration
      )
      .add(
        {
          targets: '#Player2',
          easing: PlayerEasingX,
          x: Player2SetPos.x,
          duration: DigDuration,
        },
        HitDuration + DigDuration + DigDuration + HitDuration
      )
      .add(
        {
          targets: '#Ball1',
          easing: DownEasingY,
          y: Player2BallSetPoint.y,
          duration: DigDuration / 2,
        },
        HitDuration + DigDuration + DigDuration + HitDuration + DigDuration / 2
      )
      .add(
        {
          targets: '#Ball1',
          easing: UpEasingY,
          y: BallTopPoint,
          duration: DigDuration / 2,
        },
        HitDuration + DigDuration + DigDuration + HitDuration + DigDuration
      )
      .add(
        {
          targets: '#Ball1',
          easing: DownEasingY,
          y: Player1BallHitPoint.y,
          duration: DigDuration / 2,
        },
        HitDuration +
          DigDuration +
          DigDuration +
          HitDuration +
          DigDuration +
          DigDuration / 2
      )
      .add(
        {
          targets: '#Player2',
          easing: PlayerEasingX,
          x: Player2DefaultPos.x,
          duration: DigDuration / 2,
        },
        HitDuration +
          DigDuration +
          DigDuration +
          HitDuration +
          DigDuration +
          200
      )
      .add(
        {
          targets: '#Ball1',
          easing: BallEasingX,
          x: Player1BallHitPoint.x,
          duration: DigDuration,
        },
        HitDuration + DigDuration + DigDuration + HitDuration + DigDuration
      )
  })
</script>

<h3>Traditional</h3>
<h1>Pepper</h1>

<p class=" max-w-xl">
  Pepper is the goat in volleyball — a fast-paced volleyball warm-up where two
  players pass, set, and spike the ball back and forth, building quick reactions
  and ball control. Perfect for sharpening your skills before a game!
</p>

<div class="container relative mx-auto my-12 aspect-2/1 max-w-4xl">
  <svg
    class="h-full w-full"
    viewBox="0 0 3000 1500"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Volleyball
      id="Ball1"
      x={Ball1DefaultPos.x}
      y={Ball1DefaultPos.y}
    />
    <Player
      id="Player1"
      x={Player1DefaultPos.x}
      y={Player1DefaultPos.y}
    />
    <Player
      id="Player2"
      x={Player2DefaultPos.x}
      y={Player2DefaultPos.y}
    />
  </svg>
</div>

<div class="container">
  <div class="mb-4">
    <Range
      id="TimelineRangeElement"
      step="0.001"
      bind:value={TimelineRangeValue}
      min={0}
      max={100}
    />
  </div>
  <div class="flex flex-row justify-center gap-5">
    <Button
      on:click={() => {
        if (TimeLine) {
          TimeLine.play()
        }
      }}>Play</Button
    >
    <Button
      on:click={() => {
        if (TimeLine) {
          TimeLine.pause()
        }
      }}>Pause</Button
    >
    <Button
      on:click={() => {
        if (TimeLine) {
          TimeLine.restart()
          TimeLine.pause()
        }
      }}>Reset</Button
    >
  </div>
</div>

<div class="text-sky-400">
  <AngleDownOutline size="xl" />
</div>

<style>
</style>
