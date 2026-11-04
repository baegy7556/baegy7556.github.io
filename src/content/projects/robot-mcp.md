---
title: robot-mcp
summary: A browser-based robot design and physics simulator — build in 3D, wire an Arduino circuit, run real code, and let Claude design and drive the robot over MCP.
cover: /media/projects/robot-mcp/cover.svg
coverAlt: "TODO: describe the screenshot, e.g. the 3D editor showing a two-wheeled robot"
tags: [Physics simulation, DC motor modelling, Arduino emulation, 3D editor, MCP, Claude]
role: "TODO: e.g. Solo project — design and implementation"
period: "TODO: start date – present"
status: In development
order: 1
featured: true
hidden: false
links: []
media:
  - file: /media/projects/robot-mcp/media-1.svg
    alt: "TODO: describe this image"
    caption: "TODO: e.g. Arduino circuit editor"
---

## Overview

robot-mcp is a web app for designing a robot and testing it in a physics simulation before building anything. It brings together the parts of a robot that usually live in separate tools — mechanical layout, motors, electronics and firmware — so a design can be tried end-to-end in the browser.

It is also built to be driven by an AI: Claude connects through the Model Context Protocol (MCP) and can design the robot and control it in the simulation.

## My role

**TODO:** confirm — e.g. "Solo project: I designed and built the whole app."

## Process

- **3D part editor** — place and edit the robot's parts in 3D.
- **DC motor model** — motors follow a torque–speed characteristic, so they behave like real motors: a heavier load slows the motor down, and past its limit the motor stalls and stops.
- **Arduino circuit editor and code emulation** — wire up a circuit and run actual Arduino code against the simulated hardware.
- **MCP integration** — exposes the design and control functions as MCP tools so Claude can build and drive the robot.
- **TODO:** tech stack (language, frameworks, physics engine) and the hardest problem you solved.

## Results

Still in development. **TODO:** add the repo link under Links, and what works today, and what you learned (no numbers you haven't measured).
