import React, { useEffect } from 'react';
import { X, Loader2, CheckCircle2, Lock, ArrowRight, AlertTriangle } from 'lucide-react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useSwitchChain } from 'wagmi';
import { parseUnits, type Address } from 'viem';
import { xLayer } from 'viem/chains';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  gameName: string;
  targetUrl: string;
}

// Minimal ERC20 ABI for transfer
const ERC20_ABI = [
  {
    inputs: [
      { name: 'recipient', type: 'address' },
      { name: 'amount', type: 'uint256' }
    ],
    name: 'transfer',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  }
] as const;

// Configuration
const TOKEN_ADDRESS = '0xbcb009e1a796363629b958802cb622e53bfd7db9' as const; // FLYDAO Token
const RECIPIENT_ADDRESS = '0xd86d0fed278cd70e2ba9bdb2b9811cede825a558' as const; // Treasury
const PAYMENT_AMOUNT = '1000'; // 1000 Tokens

const PaymentModal: React.FC<Props> = ({ isOpen, onClose, gameName, targetUrl }) => {
  const { address, chainId } = useAccount();
  const { switchChainAsync } = useSwitchChain();
  
  // Contract Write Hook
  const { 
    data: hash, 
    error: writeError, 
    isPending: isWritePending, 
    writeContractAsync 
  } = useWriteContract();

  // Transaction Receipt Hook
  const { 
    isLoading: isConfirming, 
    isSuccess: isConfirmed 
  } = useWaitForTransactionReceipt({ 
    hash, 
  });

  // Handle successful payment
  useEffect(() => {
    if (isConfirmed) {
      // Delay slightly to show success state before redirecting
      const timer = setTimeout(() => {
        window.open(targetUrl, '_blank');
        onClose();
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isConfirmed, targetUrl, onClose]);

  if (!isOpen) return null;

  const handlePayment = async () => {
    if (!address) return;

    try {
      // 1. Ensure correct network (X Layer)
      if (chainId !== xLayer.id) {
        await switchChainAsync({ chainId: xLayer.id });
      }

      // 2. Execute Transfer
      await writeContractAsync({
        address: TOKEN_ADDRESS,
        abi: ERC20_ABI,
        functionName: 'transfer',
        args: [
          RECIPIENT_ADDRESS,
          parseUnits(PAYMENT_AMOUNT, 18) // Assuming 18 decimals
        ],
        account: address,
        chain: xLayer,
      });
    } catch (error) {
      console.error('Payment failed:', error);
    }
  };

  const isWrongNetwork = chainId !== xLayer.id;
  const isLoading = isWritePending || isConfirming;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={isLoading ? undefined : onClose} />
      
      <div className="relative w-full max-w-md bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-teal-600/20 p-6 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 border border-emerald-500/20">
                    <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-white tracking-wide">Unlock Game</h2>
                  <p className="text-xs text-emerald-400/80">Pay to Earn Access</p>
                </div>
            </div>
            {!isLoading && (
              <button 
                  onClick={onClose}
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
              >
                  <X className="w-5 h-5" />
              </button>
            )}
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6">
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-white mb-2">{gameName}</h3>
              <p className="text-sm text-gray-400">
                To access this P2E game, you need to pay a one-time entry fee to the DAO Treasury.
              </p>
            </div>

            <div className="bg-white/5 rounded-xl p-4 border border-white/10 flex flex-col items-center justify-center gap-2">
               <span className="text-xs text-gray-500 uppercase tracking-widest">Entry Fee</span>
               <div className="text-3xl font-black text-emerald-400 font-mono">
                 1,000 FLY
               </div>
               <span className="text-xs text-gray-500">on X Layer Network</span>
            </div>

            {/* Status Messages */}
            {isConfirming && (
              <div className="flex items-center justify-center gap-2 text-yellow-400 bg-yellow-400/10 p-3 rounded-lg border border-yellow-400/20">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span className="text-sm font-bold">Confirming Transaction...</span>
              </div>
            )}

            {isConfirmed && (
               <div className="flex items-center justify-center gap-2 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                <CheckCircle2 className="w-4 h-4" />
                <span className="text-sm font-bold">Payment Successful! Redirecting...</span>
              </div>
            )}

            {writeError && (
               <div className="flex items-start gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20 text-xs text-left break-words">
                <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{writeError.message.includes('User rejected') ? 'Transaction rejected by user.' : 'Transaction failed. Please check your balance and try again.'}</span>
              </div>
            )}

            {/* Action Button */}
            <button
              onClick={handlePayment}
              disabled={isLoading || isConfirmed || !address}
              className={`w-full py-4 rounded-xl font-bold text-sm tracking-wider uppercase transition-all flex items-center justify-center gap-2
                ${isConfirmed 
                  ? 'bg-green-500 text-black cursor-default'
                  : isLoading 
                    ? 'bg-emerald-600/50 text-white/50 cursor-wait'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-black shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-[0_0_30px_rgba(16,185,129,0.6)]'
                }
              `}
            >
              {isLoading ? (
                 <>Processing...</>
              ) : isConfirmed ? (
                 <>Success</>
              ) : isWrongNetwork ? (
                 <>Switch to X Layer</>
              ) : (
                 <>Pay 1,000 FLY <ArrowRight className="w-4 h-4" /></>
              )}
            </button>
            
            {!address && (
               <p className="text-center text-xs text-red-400">Please connect your wallet first.</p>
            )}

        </div>
      </div>
    </div>
  );
};

export default PaymentModal;