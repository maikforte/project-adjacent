"use client";

import classes from "./layout.module.scss";
import { Container, Flex, ScrollArea } from "@mantine/core";

export default function DashboardLayout({ children }: { children: any }) {
	return (
		<Container fluid h="100%" p={0}>
			<Flex direction="row" h="100%">
				<Flex className={classes.childContainer} direction="column" flex={1}>
					<ScrollArea flex={1}>{children}</ScrollArea>
				</Flex>
			</Flex>
		</Container>
	);
}
