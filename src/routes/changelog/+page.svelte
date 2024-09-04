<script lang="ts">
  import { Li, List, Timeline, TimelineItem } from 'flowbite-svelte'
  import { DateTime } from 'luxon'
</script>

<Timeline>
  <TimelineItem
    title="Interactive Court — Beta 0.3"
    date={DateTime.fromISO('2024-09-02').toLocaleString(DateTime.DATE_HUGE)}
  >
    <h3 class="mb-0">Highlight</h3>
    <p class="mb-6 text-sm">
      The first version of the interactive court was released, detailing the
      courts dimension and different zones.
    </p>

    <h3 class="mb-0">New</h3>
    <List
      list="disc"
      class="pb-6 text-sm"
    >
      <Li>Interactive court</Li>
    </List>
  </TimelineItem>
  <TimelineItem
    title="Icons & Tags — Beta 0.2"
    date={DateTime.fromISO('2024-09-02').toLocaleString(DateTime.DATE_HUGE)}
  >
    <h3 class="mb-0">Highlight</h3>
    <p class="mb-6 text-sm">
      The first version of the terminology section was released, detailing the
      player icons and tags that will be used throughout the website.
    </p>

    <h3 class="mb-0">New</h3>
    <List
      list="disc"
      class="pb-6 text-sm"
    >
      <Li>Introduced player icons.</Li>
      <Li>Introduced Skill, Team Size, and Equipment tags.</Li>
      <Li>Landing page text content.</Li>
    </List>
  </TimelineItem>
  <TimelineItem
    title="Development started — Beta 0.1"
    date={DateTime.fromISO('2024-08-31').toLocaleString(DateTime.DATE_HUGE)}
  >
    <h3 class="mb-0">Highlight</h3>
    <p class="pb-6 text-sm">
      The initial scaffolding for the website was created and published as a
      work-in-progress project to the general public.
    </p>
    <h3 class="mb-0">New</h3>
    <List
      list="disc"
      class="pb-6 text-sm"
    >
      <Li>Sidebar</Li>
      <Li>Changelog</Li>
      <Li>Navbar</Li>
      <Li>Darkmode</Li>
      <Li>Credits</Li>
    </List>
  </TimelineItem>
</Timeline>

<style>
</style>
