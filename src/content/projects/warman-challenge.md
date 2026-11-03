---
title: Warman Challenge Robot
summary: A team-built autonomous robot for the university Warman design competition — I handled the electronics layout, assembly and Arduino control code.
cover: /media/projects/warman-challenge/cover.svg
coverAlt: "TODO: describe the photo, e.g. the finished robot on the competition course"
tags: [Arduino, C++, DC motors, Electronics layout, Debugging, Teamwork]
role: Initial build, electronics layout, assembly and Arduino control code (team of 4)
period: "2026"
status: Completed
order: 2
media:
  - type: image
    src: /media/projects/warman-challenge/media-1.svg
    alt: "TODO: describe this image"
    caption: "TODO: e.g. electronics layout"
---

## Overview

The Warman Challenge is a university design competition where teams build a robot to complete a set course. We worked as a team of four.

## My role

- Designed the robot's initial build.
- Handled the electronics layout and assembled the robot.
- Wrote the Arduino control code that drove it around the path course.

## Process

- **Fault finding:** during iterative testing the robot misbehaved; I traced the cause to a short circuit from a solder bridge on the breadboard.
- **Motor control:** the DC motors overshot their targets. I solved it with cyclic on/off timing, which gave stable, repeatable motion.
- **TODO:** a sentence on the course/task and any design changes between iterations.

## Results

The robot completed the path course. **TODO:** competition result or score, if you have it.
