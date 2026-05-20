import type { PropsWithChildren, ReactNode } from 'react';
import { Text } from '@/shared/components/Text';

type IconLabelProps = PropsWithChildren<{
    icon: ReactNode;
}>;

export const IconLabel = ({ icon, children }: IconLabelProps) => (
    <div className="flex items-center gap-2">
        {icon}
        <Text variant="label">{children}</Text>
    </div>
);
