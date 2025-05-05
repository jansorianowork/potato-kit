import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

/**
 * Accordion component allows users to toggle the visibility of content sections.
 * It supports single or multiple open items and is fully customizable.
 */
const Accordion = AccordionPrimitive.Root;

/**
 * AccordionItem represents a single collapsible item within the Accordion.
 *
 * @param className - Additional classes for styling.
 * @param props - Other props passed to the AccordionItem.
 */
const AccordionItem = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Item>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
	<AccordionPrimitive.Item
		ref={ref}
		className={cn("storybook-accordion-item", className)}
		{...props}
	/>
));
AccordionItem.displayName = "AccordionItem";

/**
 * AccordionTrigger is the clickable element that toggles the visibility of the AccordionContent.
 *
 * @param className - Additional classes for styling.
 * @param children - The content inside the trigger.
 * @param props - Other props passed to the AccordionTrigger.
 */
const AccordionTrigger = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Trigger>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Header className="flex">
		<AccordionPrimitive.Trigger
			ref={ref}
			className={cn(
				"storybook-accordion-trigger flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
				className
			)}
			{...props}
		>
			{children}
			<ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
		</AccordionPrimitive.Trigger>
	</AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

/**
 * AccordionContent is the collapsible content area of the AccordionItem.
 *
 * @param className - Additional classes for styling.
 * @param children - The content inside the collapsible area.
 * @param props - Other props passed to the AccordionContent.
 */
const AccordionContent = React.forwardRef<
	React.ElementRef<typeof AccordionPrimitive.Content>,
	React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
	<AccordionPrimitive.Content
		ref={ref}
		className={cn(
			"storybook-accordion-content overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
			className
		)}
		{...props}
	>
		<div className={cn("pb-4 pt-0", className)}>{children}</div>
	</AccordionPrimitive.Content>
));

AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
