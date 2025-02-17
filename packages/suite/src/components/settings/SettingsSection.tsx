import { ReactNode, ReactElement } from 'react';
import styled, { useTheme } from 'styled-components';
import { Paragraph, Icon, IconType, H3, Card } from '@trezor/components';
import { spacings, spacingsPx } from '@trezor/theme';
import { breakpointMediaQueries } from '@trezor/styles';

const Wrapper = styled.div`
    margin-bottom: ${spacingsPx.xxxl};
    display: flex;
    width: 100%;

    ${breakpointMediaQueries.below_lg} {
        display: block;
    }
`;

const Header = styled.div`
    min-width: 250px;
    max-width: 270px;
    margin-right: ${spacingsPx.xxxl};
    margin-bottom: ${spacingsPx.xs};
    ${breakpointMediaQueries.below_lg} {
        margin-bottom: ${spacingsPx.md};
    }
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    gap: ${spacingsPx.sm};
`;

const Description = styled(Paragraph)`
    padding-left: ${spacings.xl + spacings.sm}px;
    color: ${({ theme }) => theme.textSubdued};

    ${breakpointMediaQueries.below_lg} {
        margin-bottom: ${spacingsPx.lg};
    }
`;

const StyledCard = styled(Card)`
    gap: ${spacingsPx.xxl};
    flex: 1;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

interface SettingsSectionProps {
    customHeader?: ReactNode;
    title?: string | ReactElement;
    icon?: IconType;
    description?: string | ReactElement;
    className?: string;
    children?: ReactNode;
    bottomActions?: ReactNode; // Used for activate coins (remove when big redesign is done)
}

export const SettingsSection = ({
    title,
    icon,
    description,
    customHeader,
    className,
    children,
    bottomActions,
}: SettingsSectionProps) => {
    const theme = useTheme();

    return (
        <Wrapper>
            <Header>
                {!title && customHeader}
                {title && !customHeader && (
                    <Title>
                        {icon && <Icon icon={icon} size={24} color={theme.iconDefault} />}
                        <H3>{title}</H3>
                    </Title>
                )}
                {description && !customHeader && (
                    <Description typographyStyle="label">{description}</Description>
                )}
            </Header>

            <Content>
                <StyledCard className={className}>{children}</StyledCard>
                {bottomActions}
            </Content>
        </Wrapper>
    );
};
