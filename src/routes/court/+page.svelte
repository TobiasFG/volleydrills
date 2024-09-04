<script lang="ts">
  import {
    AddHighlight,
    AddHighlightToDefaults,
    AddStrokeHighlight,
    RemoveHighlight,
    RemoveHighlightFromDefaults,
    RemoveStrokeHighlight,
  } from '$lib/components/court/CourtAnimations'
  import { CourtIdsLookup } from '$lib/components/court/CourtIds'
  import CourtSvg from '$lib/components/court/CourtSVG.svelte'
  import { Button, Tooltip } from 'flowbite-svelte'
</script>

<h1 class="text-3xl">The court</h1>

<!--Net line highlight-->
<Button
  id="NetLineButton"
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults([CourtIdsLookup.NetLine])
    AddStrokeHighlight([CourtIdsLookup.NetLine])
  }}
  on:mouseenter={() => {
    RemoveHighlightFromDefaults([CourtIdsLookup.NetLine])
    AddStrokeHighlight([CourtIdsLookup.NetLine])
  }}
  on:ontouchend={() => {
    AddHighlightToDefaults([CourtIdsLookup.NetLine])
    RemoveStrokeHighlight([CourtIdsLookup.NetLine])
  }}
  on:mouseleave={() => {
    AddHighlightToDefaults([CourtIdsLookup.NetLine])
    RemoveStrokeHighlight([CourtIdsLookup.NetLine])
  }}>Net line / Net</Button
>

<!--Court Lines highlight-->
<Button
  id="CourtLinesButton"
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
    ])
    AddStrokeHighlight([
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
    ])
  }}
  on:mouseenter={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
    ])
    AddStrokeHighlight([
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
    ])
  }}
  on:ontouchend={() => {
    AddHighlightToDefaults([
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
    ])
    RemoveStrokeHighlight([
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
    ])
  }}
  on:mouseleave={() => {
    AddHighlightToDefaults([
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
    ])
    RemoveStrokeHighlight([
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
    ])
  }}>Court lines</Button
>

<!--Court highlight-->
<Button
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.Court_FrontZone_1,
      CourtIdsLookup.Court_FrontZone_2,
      CourtIdsLookup.Court_BackZone_1,
      CourtIdsLookup.Court_BackZone_2,
    ])
    AddHighlight([CourtIdsLookup.Court_Text])
  }}
  on:mouseenter={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.Court_FrontZone_1,
      CourtIdsLookup.Court_FrontZone_2,
      CourtIdsLookup.Court_BackZone_1,
      CourtIdsLookup.Court_BackZone_2,
    ])
    AddHighlight([CourtIdsLookup.Court_Text])
  }}
  on:ontouchend={() => {
    AddHighlightToDefaults([
      CourtIdsLookup.Court_FrontZone_1,
      CourtIdsLookup.Court_FrontZone_2,
      CourtIdsLookup.Court_BackZone_1,
      CourtIdsLookup.Court_BackZone_2,
    ])
    RemoveHighlight([CourtIdsLookup.Court_Text])
  }}
  on:mouseleave={() => {
    AddHighlightToDefaults([
      CourtIdsLookup.Court_FrontZone_1,
      CourtIdsLookup.Court_FrontZone_2,
      CourtIdsLookup.Court_BackZone_1,
      CourtIdsLookup.Court_BackZone_2,
    ])
    RemoveHighlight([CourtIdsLookup.Court_Text])
  }}>Court</Button
>

<!--Front Zones highlight-->
<Button
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.Court_FrontZone_1,
      CourtIdsLookup.Court_FrontZone_2,
    ])
    AddHighlight([
      CourtIdsLookup.Court_FrontZone_Text_1,
      CourtIdsLookup.Court_FrontZone_Text_2,
    ])
  }}
  on:mouseenter={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.Court_FrontZone_1,
      CourtIdsLookup.Court_FrontZone_2,
    ])
    AddHighlight([
      CourtIdsLookup.Court_FrontZone_Text_1,
      CourtIdsLookup.Court_FrontZone_Text_2,
    ])
  }}
  on:ontouchend={() => {
    AddHighlightToDefaults([
      CourtIdsLookup.Court_FrontZone_1,
      CourtIdsLookup.Court_FrontZone_2,
    ])
    RemoveHighlight([
      CourtIdsLookup.Court_FrontZone_Text_1,
      CourtIdsLookup.Court_FrontZone_Text_2,
    ])
  }}
  on:mouseleave={() => {
    AddHighlightToDefaults([
      CourtIdsLookup.Court_FrontZone_1,
      CourtIdsLookup.Court_FrontZone_2,
    ])
    RemoveHighlight([
      CourtIdsLookup.Court_FrontZone_Text_1,
      CourtIdsLookup.Court_FrontZone_Text_2,
    ])
  }}>Front Zones</Button
>

<!--Back Zone highlight-->
<Button
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.Court_BackZone_1,
      CourtIdsLookup.Court_BackZone_2,
    ])
    AddHighlight([
      CourtIdsLookup.Court_BackZone_Text_1,
      CourtIdsLookup.Court_BackZone_Text_2,
    ])
  }}
  on:mouseenter={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.Court_BackZone_1,
      CourtIdsLookup.Court_BackZone_2,
    ])
    AddHighlight([
      CourtIdsLookup.Court_BackZone_Text_1,
      CourtIdsLookup.Court_BackZone_Text_2,
    ])
  }}
  on:ontouchend={() => {
    AddHighlightToDefaults([
      CourtIdsLookup.Court_BackZone_1,
      CourtIdsLookup.Court_BackZone_2,
    ])
    RemoveHighlight([
      CourtIdsLookup.Court_BackZone_Text_1,
      CourtIdsLookup.Court_BackZone_Text_2,
    ])
  }}
  on:mouseleave={() => {
    AddHighlightToDefaults([
      CourtIdsLookup.Court_BackZone_1,
      CourtIdsLookup.Court_BackZone_2,
    ])
    RemoveHighlight([
      CourtIdsLookup.Court_BackZone_Text_1,
      CourtIdsLookup.Court_BackZone_Text_2,
    ])
  }}>Back Zones</Button
>

<!--Service Zone highlight-->
<Button
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults()
    AddHighlight([CourtIdsLookup.ServiceZone])
  }}
  on:mouseenter={() => {
    RemoveHighlightFromDefaults()
    AddHighlight([CourtIdsLookup.ServiceZone])
  }}
  on:ontouchend={() => {
    AddHighlightToDefaults()
    RemoveHighlight([CourtIdsLookup.ServiceZone])
  }}
  on:mouseleave={() => {
    AddHighlightToDefaults()
    RemoveHighlight([CourtIdsLookup.ServiceZone])
  }}>Service Zones</Button
>

<!--Free Zone highlight-->
<Button
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
    ])
    AddHighlight([CourtIdsLookup.FreeZone, CourtIdsLookup.FreeZone_Details])
  }}
  on:mouseenter={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
    ])
    AddHighlight([CourtIdsLookup.FreeZone, CourtIdsLookup.FreeZone_Details])
  }}
  on:ontouchend={() => {
    AddHighlightToDefaults([
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
    ])
    RemoveHighlight([CourtIdsLookup.FreeZone, CourtIdsLookup.FreeZone_Details])
  }}
  on:mouseleave={() => {
    AddHighlightToDefaults([
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
    ])
    RemoveHighlight([CourtIdsLookup.FreeZone, CourtIdsLookup.FreeZone_Details])
  }}>Free Zone</Button
>

<!--Substitution Zone highlight-->
<Button
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults()
    AddHighlight([CourtIdsLookup.SubstitutionZone])
  }}
  on:mouseenter={() => {
    RemoveHighlightFromDefaults()
    AddHighlight([CourtIdsLookup.SubstitutionZone])
  }}
  on:ontouchend={() => {
    AddHighlightToDefaults()
    RemoveHighlight([CourtIdsLookup.SubstitutionZone])
  }}
  on:mouseleave={() => {
    AddHighlightToDefaults()
    RemoveHighlight([CourtIdsLookup.SubstitutionZone])
  }}>Substitution Zones</Button
>

<!--Libero Replacement Zone highlight-->
<Button
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults()
    AddHighlight([CourtIdsLookup.LiberoReplacementZone])
  }}
  on:mouseenter={() => {
    RemoveHighlightFromDefaults()
    AddHighlight([CourtIdsLookup.LiberoReplacementZone])
  }}
  on:ontouchend={() => {
    AddHighlightToDefaults()
    RemoveHighlight([CourtIdsLookup.LiberoReplacementZone])
  }}
  on:mouseleave={() => {
    AddHighlightToDefaults()
    RemoveHighlight([CourtIdsLookup.LiberoReplacementZone])
  }}>Libero Replacement Zones</Button
>

<!--Coach Zone highlight-->
<Button
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults()
    AddHighlight([CourtIdsLookup.CoachZone])
  }}
  on:mouseenter={() => {
    RemoveHighlightFromDefaults()
    AddHighlight([CourtIdsLookup.CoachZone])
  }}
  on:ontouchend={() => {
    AddHighlightToDefaults()
    RemoveHighlight([CourtIdsLookup.CoachZone])
  }}
  on:mouseleave={() => {
    AddHighlightToDefaults()
    RemoveHighlight([CourtIdsLookup.CoachZone])
  }}>Coach Zones</Button
>

<!--3-meter line highlight-->
<Button
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults([CourtIdsLookup.Line_3_Meter])
    AddHighlight([CourtIdsLookup.Line_3_Meter_Details])
  }}
  on:mouseenter={() => {
    RemoveHighlightFromDefaults([CourtIdsLookup.Line_3_Meter])
    AddHighlight([CourtIdsLookup.Line_3_Meter_Details])
  }}
  on:ontouchend={() => {
    AddHighlightToDefaults([CourtIdsLookup.Line_3_Meter])
    RemoveHighlight([CourtIdsLookup.Line_3_Meter_Details])
  }}
  on:mouseleave={() => {
    AddHighlightToDefaults([CourtIdsLookup.Line_3_Meter])
    RemoveHighlight([CourtIdsLookup.Line_3_Meter_Details])
  }}>3-Meter Lines</Button
>

<Tooltip
  class="z-50"
  placement="right"
  reference="#NetLine"
  triggeredBy="[id^='NetLineButton']">Net / Net Line</Tooltip
>
<Tooltip
  class="z-50"
  placement="top"
  reference={CourtIdsLookup.SideLine_1}
  triggeredBy="#CourtLinesButton">Side line</Tooltip
>
<Tooltip
  class="z-50"
  placement="bottom"
  reference={CourtIdsLookup.SideLine_2}
  triggeredBy="#CourtLinesButton">Side line</Tooltip
>
<Tooltip
  class="z-50"
  placement="right"
  reference={CourtIdsLookup.EndLine_2}
  triggeredBy="#CourtLinesButton">End line</Tooltip
>
<Tooltip
  class="z-50"
  placement="left"
  reference={CourtIdsLookup.EndLine_1}
  triggeredBy="#CourtLinesButton">End line</Tooltip
>

<div class=" container relative my-12 aspect-2/1">
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 3000 1500"
    fill="transparent"
    xmlns="http://www.w3.org/2000/svg"
  >
    <CourtSvg />
  </svg>
</div>
