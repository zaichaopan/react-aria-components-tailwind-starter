import { Slider, SliderOutput, SliderTack } from '../src/slider';
import { Description, Label } from '../src/field';
import { Volume, Volume2, VolumeOff } from 'lucide-react';
import { docs } from '../.storybook/docs';

const meta = {
  parameters: {
    layout: 'centered',
    docs
    },
  };

export default meta;

export const BasicExample = () => {
  return (
    <Slider minValue={50} maxValue={200} defaultValue={[100, 150]}>
      <Label className="text-xl">Price range</Label>
      <Description className="pb-4">
        Nightly prices including fees and taxes
      </Description>
      <SliderTack thumbLabels={['start', 'end']} />
      <SliderOutput>
        {({ state }) => {
          return (
            <div className="flex justify-between gap-2">
              <div className="flex flex-col">
                <div className="text-muted text-sm">Minimum</div>
                <div>{state.getThumbValueLabel(0)}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-muted text-sm">Maximum</div>
                <div>{state.getThumbValueLabel(1)}</div>
              </div>
            </div>
          );
        }}
      </SliderOutput>
    </Slider>
  );
};

export const VerticalSlider = () => {
  return (
    <Slider
      minValue={50}
      maxValue={200}
      defaultValue={[100, 150]}
      orientation="vertical"
    >
      <Label className="text-xl">Price range</Label>
      <SliderTack thumbLabels={['start', 'end']} />
      <SliderOutput>
        {({ state }) => {
          return (
            <div className="flex justify-between gap-5 text-center">
              <div className="flex flex-col">
                <div className="text-muted text-sm">Minimum</div>
                <div>{state.getThumbValueLabel(0)}</div>
              </div>
              <div className="flex flex-col">
                <div className="text-muted text-sm">Maximum</div>
                <div>{state.getThumbValueLabel(1)}</div>
              </div>
            </div>
          );
        }}
      </SliderOutput>
    </Slider>
  );
};

export const OneThumbSlider = () => {
  return (
    <div className="flex flex-col gap-8">
      <Slider
        minValue={50}
        maxValue={200}
        defaultValue={100}
        className="flex w-[350px] flex-col"
      >
        <div className="flex flex-1 items-end">
          <Label className="pe-4 pb-1 font-normal text-nowrap">
            Output Volume:
          </Label>
          <div className="flex flex-1 flex-col">
            <SliderOutput className="self-center">
              {({ state }) => {
                return (
                  <span className="text-sm">{state.getThumbValueLabel(0)}</span>
                );
              }}
            </SliderOutput>
            <div className="flex flex-1 items-center gap-3">
              <Volume className="h-8 w-8 translate-x-[50%]" strokeWidth={1.5} />
              <SliderTack thumbLabels={['volume']} />
              <Volume2 className="h-8 w-8" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </Slider>

      <Slider
        minValue={0}
        maxValue={200}
        defaultValue={100}
        className="flex w-[350px] flex-col"
        orientation="vertical"
      >
        <div className="flex flex-1 items-end">
          <div className="flex flex-1 flex-col">
            <SliderOutput className="self-center">
              {({ state }) => {
                return (
                  <span className="text-sm">{state.getThumbValueLabel(0)}</span>
                );
              }}
            </SliderOutput>
            <div className="flex pt-3 flex-1 flex-col items-center gap-3">
              <Volume2 className="size-5" strokeWidth={1.5} />

              <SliderTack thumbLabels={['volume']} />

              <VolumeOff className="size-5" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};
