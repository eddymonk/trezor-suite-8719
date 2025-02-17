import { Button, Text, Icon, Warning } from '@trezor/components';
import { Translation } from 'src/components/suite/Translation';
import { PassphraseHeading } from './PassphraseHeading';
import { PassphraseList, PassphraseItem } from './PassphraseList';
import { ContentType } from './types';
import { Dispatch } from 'react';

type PassphraseWalletConfirmationStep2Props = {
    setContentType: Dispatch<React.SetStateAction<ContentType>>;
};

export const PassphraseWalletConfirmationStep2 = ({
    setContentType,
}: PassphraseWalletConfirmationStep2Props) => (
    <>
        <PassphraseHeading>
            <Translation id="TR_PASSPHRASE_WALLET_CONFIRMATION_STEP2_TITLE" />
        </PassphraseHeading>
        <PassphraseList>
            <PassphraseItem>
                <Icon icon="NEWSPAPER" size={16} />
                <Text>
                    <Translation id="TR_PASSPHRASE_WALLET_CONFIRMATION_STEP2_ITEM1_DESCRIPTION" />
                </Text>
            </PassphraseItem>
            <PassphraseItem>
                <Icon icon="COPY" size={16} />
                <Text>
                    <Translation id="TR_PASSPHRASE_WALLET_CONFIRMATION_STEP2_ITEM2_DESCRIPTION" />
                </Text>
            </PassphraseItem>
            <PassphraseItem>
                <Icon icon="HIDE" size={16} />
                <Text>
                    <Translation id="TR_PASSPHRASE_WALLET_CONFIRMATION_STEP2_ITEM3_DESCRIPTION" />
                </Text>
            </PassphraseItem>
        </PassphraseList>

        <Warning>
            <Translation id="TR_PASSPHRASE_WALLET_CONFIRMATION_STEP2_WARNING" />
        </Warning>
        <Button
            isFullWidth
            variant="tertiary"
            onClick={() => {
                setContentType('step3');
            }}
            margin={{ top: 12 }}
        >
            <Translation id="TR_PASSPHRASE_WALLET_CONFIRMATION_STEP2_BUTTON" />
        </Button>
    </>
);
