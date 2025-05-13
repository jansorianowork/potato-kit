"use client";

import * as React from "react";
import { Slider } from "@/components/ui/slider";
import "./slider.css";

export function SliderDemo({
  defaultValue = [50],
  min = 0,
  max = 100,
  step = 1,
}: {
  defaultValue?: number[];
  min?: number;
  max?: number;
  step?: number;
}) {
  const [value, setValue] = React.useState<number[]>(defaultValue);

  return (
    <div className="slider-wrapper">
      <Slider
        value={value}
        onValueChange={setValue}
        min={min}
        max={max}
        step={step}
      />
      <div className="slider-value">
        Current Value: {value.join(" – ")}
      </div>
    </div>
  );
}
