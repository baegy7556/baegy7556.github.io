---
title: robot-mcp
summary: A browser-based robot design and simulation environment — edit parts in 3D, run real Arduino code on an emulated microcontroller, simulate the motors with physics, and let Claude design, code and test the robot over MCP.
cover: /media/projects/robot-mcp/cover.svg
coverAlt: "TODO: describe the screenshot, e.g. the 3D editor showing a two-wheeled robot"
tags: [Arduino emulation (avr8js), Physics simulation (Rapier), MCP / Claude, DC motor modelling, Fusion 360 add-in, CadQuery, AI-assisted development]
role: Architecture, scope decisions and review (AI-assisted development with parallel Claude Code agents)
period: "TODO: start date – present"
status: Verified in simulation; real-hardware testing next
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

robot-mcp is a browser-based environment for designing a robot and testing it in simulation before building it. Mechanical design, motors, electronics and firmware live in one place, so a design can be tried end to end — from the Arduino sketch to the wheels turning in a physics simulation.

It is also built to be driven by an AI: Claude connects over the Model Context Protocol (MCP) and uses the app's tools to design the robot, write and run its code, run the simulation, move the camera and drive the robot.

## My role

This is an **AI-assisted development** project. I ran several Claude Code cloud agents in parallel, each building one module against a shared contract document (`interfaces.md`) that fixed how the modules talk to each other, and then integrated the modules. My part was the architecture, deciding the scope, and reviewing the agents' work.

## Architecture

![Architecture diagram: Claude calls MCP tools on a bridge hub, which connects to the web app (3D editor, circuit emulation, Rapier physics) and to a real Arduino over serial. A Fusion 360 add-in imports assemblies into the 3D editor. The same firmware runs in the emulator and on the real Arduino.](/media/projects/robot-mcp/architecture.svg)

Claude talks to a bridge hub over MCP. The hub connects to the web app (3D editor, physics, circuit emulation) and to a real Arduino over serial. A Fusion 360 add-in brings assemblies into the editor.

## Process

- **3D part editor** — edit parts in 3D, including holes, mirroring and shelling (hollowing a solid). A Fusion 360 add-in imports assemblies with their mass, centre of mass and joints.
- **Real Arduino code, emulated** — the Arduino sketch runs on an emulated AVR microcontroller (avr8js). Its outputs drive a simulated L298N motor driver, which drives the motors in the 3D physics simulation (Rapier).
- **Motor model** — motors follow a torque–speed curve and include gear friction, a deadband, and voltage drop in the battery and motor driver, so they slow down under load and stall instead of acting like ideal actuators.
- **Sensors** — ultrasonic rangefinder, encoder, potentiometer, IR line sensor, limit switch, and an MPU6050 IMU over I2C.
- **Tuning tools** — a serial plotter and four PID example sketches.
- **Claude as the user** — design, code, simulation, camera and movement are all exposed as MCP tools, so Claude can carry out each step itself.
- **Sim-to-real** — the same firmware runs in the simulator and on a real Arduino. The control code written for the real robot connects to the simulated firmware through a virtual serial port, so it is tested in CI against the simulation.
- **Physical chassis** — a 2WD chassis designed parametrically in CadQuery. One model generates laser-cutting DXFs, 3D-printing STLs, a STEP file and a scene for the app.

## Results

- Verified in simulation.
- Next: verifying on real hardware.
- **TODO:** add the repo link under Links, and what you learned.
