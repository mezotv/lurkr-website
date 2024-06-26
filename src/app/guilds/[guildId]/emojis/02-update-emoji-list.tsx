"use client";

import { Tooltip, TooltipAnchor, useTooltipStore } from "@ariakit/react/tooltip";
import { UpdateOutlined } from "@mui/icons-material";

export function UpdateEmojiList() {
	const tooltip = useTooltipStore({ showTimeout: 150 });

	return (
		<div className="w-fit">
			<TooltipAnchor store={tooltip}>
				<button
					className="flex w-fit items-center gap-2 rounded-lg bg-yellow px-2 py-1 font-semibold text-lg text-shadow-regular disabled:cursor-not-allowed disabled:select-none md:text-xl disabled:opacity-50"
					type="button"
					disabled
				>
					Update <UpdateOutlined className="size-5 drop-shadow-regular" />
				</button>
			</TooltipAnchor>

			<Tooltip store={tooltip} className="rounded-lg bg-black px-2 py-1">
				Coming soon!
			</Tooltip>
		</div>
	);
}