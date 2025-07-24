import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  Slider,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@repo/ui";
import * as React from "react";

const selectItems = [
  { id: "apple", value: "apple", label: "Apple" },
  { id: "banana", value: "banana", label: "Banana" },
  { id: "orange", value: "orange", label: "Orange" },
];

function App() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [switchOn, setSwitchOn] = React.useState(false);
  const [sliderValue, setSliderValue] = React.useState([50]);
  const [selectedTab, setSelectedTab] = React.useState("tab1");
  const [selectedSelect, setSelectedSelect] = React.useState<string[]>([]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">
        Ark UI + Tailwind Demo
      </h1>
      <Card className="max-w-md w-full">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card description goes here.</CardDescription>
        </CardHeader>
        <CardContent>
          <Label htmlFor="input-demo">Input</Label>
          <Input id="input-demo" placeholder="Type here..." className="mb-2" />
          <Label htmlFor="textarea-demo">Textarea</Label>
          <Textarea
            id="textarea-demo"
            placeholder="Type more..."
            className="mb-2"
          />
          <Badge variant="secondary">Badge</Badge>
        </CardContent>
        <CardFooter>
          <Button>Card Button</Button>
        </CardFooter>
      </Card>

      <div className="flex gap-4 items-center">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/100" alt="avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <Badge>Default</Badge>
        <Badge variant="destructive">Destructive</Badge>
      </div>

      <Progress value={60} className="w-64" />
      <Slider
        value={sliderValue}
        onValueChange={(e) => setSliderValue(e.value)}
        className="w-64"
      />

      <Switch
        checked={switchOn}
        onCheckedChange={(e) => setSwitchOn(e.checked)}
      />

      <Select
        items={selectItems}
        value={selectedSelect}
        onValueChange={(e) => setSelectedSelect(e.value)}
      >
        <SelectTrigger className="w-48" />
        <SelectContent>
          <SelectItem item={selectItems[0]}>Apple</SelectItem>
          <SelectItem item={selectItems[1]}>Banana</SelectItem>
          <SelectItem item={selectItems[2]}>Orange</SelectItem>
        </SelectContent>
      </Select>

      <Tabs
        value={selectedTab}
        onValueChange={(e) => setSelectedTab(e.value)}
        className="w-64"
      >
        <TabsList>
          <TabsTrigger value="tab1">Tab 1</TabsTrigger>
          <TabsTrigger value="tab2">Tab 2</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1">Tab 1 content</TabsContent>
        <TabsContent value="tab2">Tab 2 content</TabsContent>
      </Tabs>

      <Accordion multiple className="w-64">
        <AccordionItem value="item-1">
          <AccordionTrigger>Accordion 1</AccordionTrigger>
          <AccordionContent>Accordion 1 content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Accordion 2</AccordionTrigger>
          <AccordionContent>Accordion 2 content</AccordionContent>
        </AccordionItem>
      </Accordion>

      <Dialog open={dialogOpen} onOpenChange={(e) => setDialogOpen(e.open)}>
        <DialogTrigger asChild>
          <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogClose />
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>This is a dialog description.</DialogDescription>
          <Button onClick={() => setDialogOpen(false)}>Close</Button>
        </DialogContent>
      </Dialog>

      <Popover>
        <PopoverTrigger asChild>
          <Button>Open Popover</Button>
        </PopoverTrigger>
        <PopoverContent>Popover content here.</PopoverContent>
      </Popover>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button>Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>Tooltip content here.</TooltipContent>
      </Tooltip>
    </div>
  );
}

export default App;
