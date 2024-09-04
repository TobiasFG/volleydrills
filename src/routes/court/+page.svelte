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
  import { Button, Li, List, Tooltip } from 'flowbite-svelte'
</script>

<h1 class="text-3xl">The court</h1>

<!--Net line tooltip-->
<Tooltip
  class="z-50 max-w-96"
  placement="right"
  reference="#NetLine"
  triggeredBy="[id^='NetLineButton']"
>
  <p class="font-black">Net / Net Line</p>
  <List class="text-xs">
    <Li>
      Touching the net between the antenna, or the antenna, with any part of the
      body during play results in a fault.
    </Li>
    <Li>
      Crossing completely over the net line with any feet results in a fault.
    </Li>
    <Li>
      Players may reach over the net to block, but cannot interfere with the
      opponent's play. Reaching over to attack is only allowed if part of the
      ball is above the net.
    </Li>
  </List>
</Tooltip>

<!--Court tooltip-->
<Tooltip
  class="z-50 max-w-96"
  placement="left"
  reference={CourtIdsLookup.Court_BackZone_1}
  triggeredBy="#CourtButton"
>
  <p class="font-black">Court</p>
  <List class="text-xs">
    The key rule regarding the court is that all active players must be within
    the court's boundaries when the referee initiates play. Any feet encroaching
    on the free zone when play is iitiated will result in a fault.
  </List>
</Tooltip>
<Tooltip
  class="z-50 max-w-56"
  placement="top-start"
  reference={CourtIdsLookup.Court_BackZone_1}
  triggeredBy="#CourtLinesButton"
>
  <p class="font-black">Scoring</p>
  <List class="text-xs">
    To score a point the ball must intersect with the opponant's play zone or
    boundary lines. Note that when an opponant touches the ball, it's
    immidiately their play.
  </List>
</Tooltip>

<!--Front zones tooltip-->
<Tooltip
  class="z-50 max-w-96"
  placement="top"
  reference={CourtIdsLookup.Court_FrontZone_1}
  triggeredBy="#FrontZoneButton"
>
  <p class="font-black">Front Zones</p>
  <List class="text-xs">
    <Li>
      Only front-row players can attack the ball with a jump starting from
      within this zone.
    </Li>
    <Li>
      Back-row players can attack the ball if they jump from behind the 3-meter
      line. If they jump from inside the front zone, it's a fault.
    </Li>
    <Li>Only front-row players are allowed to block.</Li>
  </List>
</Tooltip>

<!--Service zone tooltip-->
<Tooltip
  class="z-50 max-w-96"
  placement="top"
  reference={CourtIdsLookup.ServiceZone_1}
  triggeredBy="#ServiceZoneButton"
>
  <p class="font-black">Service Zones</p>
  <List class="text-xs">
    <Li>Serves must be made from the service zone.</Li>
    <Li>
      Touching the end line or the court during a serve results in a fault
    </Li>
    <Li>
      Additionally, players on the bench are allowed to play in the service zone
      during timeouts.
    </Li>
  </List>
</Tooltip>

<!--Free zone tooltip-->
<Tooltip
  class="z-50 max-w-96"
  placement="top"
  reference={CourtIdsLookup.FreeZone_Area}
  triggeredBy="#FreeZoneButton"
>
  <p class="font-black">Free Zone</p>
  <p class="text-xs">A minimum required obstacle free area around the court</p>
</Tooltip>

<!--Substitution zone tooltip-->
<Tooltip
  class="z-50 max-w-96"
  placement="bottom"
  reference={CourtIdsLookup.SubstitutionZone_1}
  triggeredBy="#SubstitutionZoneButton"
>
  <p class="font-black">Substitution Zones</p>
  <p class="text-xs">
    Substitutions can only be made in the substitution zones, with the only
    exception being the libero.
  </p>
</Tooltip>

<!--Libero replacement zone tooltip-->
<Tooltip
  class="z-50 max-w-96"
  placement="left"
  reference={CourtIdsLookup.LiberoReplacementZone_1}
  triggeredBy="#LiberoReplacementZoneButton"
>
  <p class="font-black">Libero Replacement Zones</p>
  <p class="text-xs">
    Switching the libero in and out can only occur between plays and must be
    done through the libero replacement zones.
  </p>
</Tooltip>

<!--Coach zone tooltip-->
<Tooltip
  class="z-50 max-w-96"
  placement="top"
  reference={CourtIdsLookup.CoachZone_1}
  triggeredBy="#CoachZoneButton"
>
  <p class="font-black">Coach Zones</p>
  <p class="text-xs">
    Coaches must remain seated on the bench closest to the second referee or
    stay within the designated coach zones.
  </p>
</Tooltip>

<!--Court lines tooltips-->
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

<div class="container relative my-12 aspect-2/1">
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
  id="CourtButton"
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
  id="FrontZoneButton"
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.Court_FrontZone_1,
      CourtIdsLookup.Court_FrontZone_2,
      CourtIdsLookup.NetLine,
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
      CourtIdsLookup.NetLine,
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
      CourtIdsLookup.NetLine,
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
      CourtIdsLookup.NetLine,
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
  id="ServiceZoneButton"
  on:ontouchstart={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
      CourtIdsLookup.ServeEdges,
    ])
    AddHighlight([CourtIdsLookup.ServiceZone])
  }}
  on:mouseenter={() => {
    RemoveHighlightFromDefaults([
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
      CourtIdsLookup.ServeEdges,
    ])
    AddHighlight([CourtIdsLookup.ServiceZone])
  }}
  on:ontouchend={() => {
    AddHighlightToDefaults([
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
      CourtIdsLookup.ServeEdges,
    ])
    RemoveHighlight([CourtIdsLookup.ServiceZone])
  }}
  on:mouseleave={() => {
    AddHighlightToDefaults([
      CourtIdsLookup.SideLine_1,
      CourtIdsLookup.SideLine_2,
      CourtIdsLookup.EndLine_1,
      CourtIdsLookup.EndLine_2,
      CourtIdsLookup.ServeEdges,
    ])
    RemoveHighlight([CourtIdsLookup.ServiceZone])
  }}>Service Zones</Button
>

<!--Free Zone highlight-->
<Button
  id="FreeZoneButton"
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
  id="SubstitutionZoneButton"
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
  id="LiberoReplacementZoneButton"
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
  id="CoachZoneButton"
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
  id="Line3MeterButton"
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
