import { MdClear } from "react-icons/md";

export default function SmallClearableItem({ index, item, onDelete }: SmallClearableItemProps) {
	return (
		<div className="bg-discord-dark relative flex flex-row flex-wrap justify-between gap-y-2 rounded-lg p-2">
			<label
				className="bg-discord-not-quite-black mr-2 flex shrink-0 items-center justify-center rounded-full px-4 text-white shadow-lg"
				htmlFor={`${index}-disallowed-prefix`}
			>
				{item}
			</label>
			<MdClear className="ml-auto h-12 w-8 cursor-pointer py-3 text-red-500" onClick={() => onDelete(index)} />
		</div>
	);
}

type SmallClearableItemOnDeleteFn = (index: number) => unknown;

interface SmallClearableItemProps {
	index: number;
	item: number | string;
	onDelete: SmallClearableItemOnDeleteFn;
}
