"use client";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function MenuDrawer() {
  const [goal, setGoal] = React.useState(350);
  const [menuTwo, setMenuTwo] = React.useState(false);
  const [menuThree, setMenuThree] = React.useState(false);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }

  return (
    <div>
      <Drawer direction="left">
        <DrawerTrigger asChild>
          <Button variant="outline">Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent className="rounded-t-none w-[500px] h-full">
          <div className="mx-auto w-full relative h-full">
            <DrawerHeader>
              <DrawerClose asChild>
                <Button
                  variant="outline"
                  onClick={() => {
                    setMenuTwo(true);
                    setMenuThree(true);
                  }}
                >
                  Close Drawer
                </Button>
              </DrawerClose>
              {/* <DrawerTitle>Move Goal</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
            </DrawerHeader>
            {/* <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <p className="h-4 w-4">-</p>
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <p className="h-4 w-4">+</p>
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">Hello</div>
          </div> */}
            <li onClick={() => setMenuTwo(true)}>Open Sub Menu</li>
            <DrawerFooter>
              {/* <Button>Submit</Button> */}
              {/* <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose> */}
            </DrawerFooter>
            <div className="bg-white border border-white w-[500px] h-[calc(100%_+_5px)] absolute -top-1 left-[490px] border-l-gray-200">
              <li onClick={() => setMenuThree(true)}>Open Sub Menu Two</li>
            </div>
            <div className="bg-white border border-white w-[500px] h-[calc(100%_+_5px)] absolute -top-1 left-[990px] border-l-gray-200">
              2
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
