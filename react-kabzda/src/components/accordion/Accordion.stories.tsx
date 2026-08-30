import type {Meta, StoryObj} from '@storybook/react-vite';
import {Accordion} from './Accordion'


const meta = {
    component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CollapsedAccordion: Story = () => {
    return  <div>collapsed</div>
}
export const OpenedAccordion: Story = () => {
    return         <div>opened</div>
}