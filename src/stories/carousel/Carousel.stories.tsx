import type { Meta, StoryObj } from "@storybook/react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	CarouselDots,
} from "@/components/ui/carousel";
import "./carousel.css";

/**
 * The `Carousel` component is a customizable image or content carousel
 * built with Embla Carousel. It supports navigation buttons and smooth transitions.
 *
 * Use it with `CarouselContent`, `CarouselItem`, `CarouselNext`, and `CarouselPrevious`.
 */
const meta: Meta<typeof Carousel> = {
	title: "Molecules/Carousel",
	component: Carousel,
	tags: ["autodocs"],
	subcomponents: {
		CarouselContent,
		CarouselItem,
		CarouselNext,
		CarouselPrevious,
		CarouselDots,
	},
	parameters: {
		layout: "centered",
		docs: {
			description: {
				component: `
The **Carousel** component is a fully customizable carousel built with Embla Carousel and composable UI primitives.

### Features
- **Horizontal & Vertical** - Support for both orientations
- **Auto-Play** - Automatic slide advancement with configurable intervals
- **Dot Navigation** - Visual indicators and navigation for all slides
- **Keyboard Support** - Arrow keys for navigation
- **Responsive** - Works seamlessly on all screen sizes
- **Accessible** - Full ARIA support and semantic HTML

### Subcomponents
- \`CarouselContent\` - Main content container
- \`CarouselItem\` - Individual slide items
- \`CarouselNext\` - Next button
- \`CarouselPrevious\` - Previous button
- \`CarouselDots\` - Dot navigation indicators

### Usage
\`\`\`tsx
<Carousel className="storybook-carousel">
  <CarouselContent>
    <CarouselItem>
      <div className="storybook-carousel-slide">Slide 1</div>
    </CarouselItem>
    <CarouselItem>
      <div className="storybook-carousel-slide">Slide 2</div>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="carousel-prev" />
  <CarouselNext className="carousel-next" />
  <CarouselDots className="carousel-dots" />
</Carousel>
\`\`\`
        `,
			},
		},
	},
	argTypes: {
		orientation: {
			control: "select",
			options: ["horizontal", "vertical"],
			description: "Carousel direction",
			table: {
				defaultValue: { summary: "horizontal" },
			},
		},
		autoPlay: {
			control: "boolean",
			description: "Enable automatic slide advancement",
			table: {
				defaultValue: { summary: "false" },
			},
		},
		autoPlayInterval: {
			control: "number",
			description: "Interval between auto-play slides in milliseconds",
			table: {
				defaultValue: { summary: "5000" },
			},
		},
	},
};

export default meta;

type Story = StoryObj<typeof Carousel>;

/**
 * Default carousel with three slides and navigation buttons.
 */
export const Default: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<Carousel className="storybook-carousel" {...args}>
			<CarouselContent>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 1</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 2</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 3</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious className="carousel-prev" />
			<CarouselNext className="carousel-next" />
			<CarouselDots className="carousel-dots" />
		</Carousel>
	),
	parameters: {
		docs: {
			description: {
				story: "A basic carousel with three slides, previous/next navigation buttons, and dot indicators.",
			},
		},
	},
};

/**
 * Carousel with five slides.
 */
export const FiveSlides: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<Carousel className="storybook-carousel" {...args}>
			<CarouselContent>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 1</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 2</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 3</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 4</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 5</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious className="carousel-prev" />
			<CarouselNext className="carousel-next" />
			<CarouselDots className="carousel-dots" />
		</Carousel>
	),
	parameters: {
		docs: {
			description: {
				story: "A carousel with five slides demonstrating navigation across multiple slides.",
			},
		},
	},
};

/**
 * Carousel without navigation buttons.
 */
export const DotsOnly: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<Carousel className="storybook-carousel" {...args}>
			<CarouselContent>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 1</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 2</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 3</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselDots className="carousel-dots" />
		</Carousel>
	),
	parameters: {
		docs: {
			description: {
				story: "A carousel with only dot navigation, useful for minimalist designs or auto-playing carousels.",
			},
		},
	},
};

/**
 * Auto-playing carousel.
 */
export const AutoPlay: Story = {
	args: {
		orientation: "horizontal",
		autoPlay: true,
		autoPlayInterval: 3000,
	},
	render: (args) => (
		<Carousel className="storybook-carousel" {...args}>
			<CarouselContent>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 1</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 2</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 3</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious className="carousel-prev" />
			<CarouselNext className="carousel-next" />
			<CarouselDots className="carousel-dots" />
		</Carousel>
	),
	parameters: {
		docs: {
			description: {
				story: "An auto-playing carousel that advances every 3 seconds. Users can still manually navigate using buttons or dots.",
			},
		},
	},
};

/**
 * Vertical carousel.
 */
export const Vertical: Story = {
	args: {
		orientation: "vertical",
	},
	render: (args) => (
		<Carousel className="storybook-carousel carousel-vertical" {...args}>
			<CarouselContent>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 1</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 2</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 3</div>
				</CarouselItem>
			</CarouselContent>
			<CarouselPrevious className="carousel-prev" />
			<CarouselNext className="carousel-next" />
			<CarouselDots className="carousel-dots" />
		</Carousel>
	),
	parameters: {
		docs: {
			description: {
				story: "A vertically-oriented carousel for displaying content from top to bottom.",
			},
		},
	},
};

/**
 * Minimal carousel without extra navigation.
 */
export const Minimal: Story = {
	args: {
		orientation: "horizontal",
	},
	render: (args) => (
		<Carousel className="storybook-carousel" {...args}>
			<CarouselContent>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 1</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 2</div>
				</CarouselItem>
				<CarouselItem>
					<div className="storybook-carousel-slide">Slide 3</div>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	),
	parameters: {
		docs: {
			description: {
				story: "A minimal carousel with only keyboard navigation (arrow keys) and no visible controls.",
			},
		},
	},
};
