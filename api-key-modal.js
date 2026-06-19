(function() {
  const ApiKeyModal = ({ isOpen, onClose, onKeySave }) => {
    if (!isOpen) return null;

    const React = window.React;
    if (!React) {
      console.error("React is not defined on window. Make sure window.React = React is declared in the main script.");
      return null;
    }
    const { useState, useEffect } = React;

    const [inputKey, setInputKey] = useState(() => localStorage.getItem('user_gemini_api_key') || '');
    const [showKey, setShowKey] = useState(false);

    useEffect(() => {
      if (isOpen) {
        setInputKey(localStorage.getItem('user_gemini_api_key') || '');
      }
    }, [isOpen]);

    const handleSave = () => {
      const trimmed = inputKey.trim();
      if (trimmed) {
        localStorage.setItem('user_gemini_api_key', trimmed);
        onKeySave(trimmed);
        alert("개인 API 키가 안전하게 등록되었습니다.");
      } else {
        localStorage.removeItem('user_gemini_api_key');
        onKeySave('');
        alert("개인 API 키가 삭제되었습니다. 공용 API 키로 복구됩니다.");
      }
      onClose();
    };

    const handleClear = () => {
      if (confirm("등록된 API 키를 삭제하시겠습니까?")) {
        localStorage.removeItem('user_gemini_api_key');
        setInputKey('');
        onKeySave('');
        alert("삭제 완료! 다시 공용 API 키를 순회하여 사용합니다.");
        onClose();
      }
    };

    return React.createElement('div', {
      className: "fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    }, 
      React.createElement('div', {
        className: "bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-sm p-5 shadow-2xl relative fade-in"
      }, [
        React.createElement('button', {
          key: 'close-btn',
          onClick: onClose,
          className: "absolute top-4 right-4 text-slate-400 hover:text-slate-200"
        }, '✕'),
        React.createElement('div', {
          key: 'content-wrapper',
          className: "space-y-4"
        }, [
          React.createElement('div', {
            key: 'header',
            className: "flex items-center gap-2 text-slate-100"
          }, [
            React.createElement('i', { key: 'icon', className: "fa-solid fa-key text-cyan-400" }),
            React.createElement('h3', { key: 'title', className: "text-sm font-bold" }, "Google Gemini API 설정")
          ]),
          React.createElement('p', {
            key: 'info',
            className: "text-[10px] text-slate-400 leading-relaxed bg-slate-950/60 p-2.5 border border-slate-850 rounded-xl"
          }, [
            React.createElement('strong', { key: 'strong-1' }, "💡 개인 API 키 사용 권장"),
            React.createElement('br', { key: 'br-1' }),
            "여러 사람이 공용 키를 사용할 경우 일일 요청 횟수 제한(Quota Limit)으로 서비스가 일시 중지될 수 있습니다. 개인 키를 등록하면 중단 없이 무제한 사용 가능하며, 키는 ",
            React.createElement('strong', { key: 'strong-2' }, "본인의 브라우저 로컬 저장소(LocalStorage)에만 안전하게 보관"),
            "되고 절대 외부 서버로 수집되지 않습니다."
          ]),
          React.createElement('div', {
            key: 'input-container',
            className: "space-y-1.5"
          }, [
            React.createElement('label', { key: 'label', className: "block text-[10px] text-slate-400 font-bold" }, "Gemini API Key 입력"),
            React.createElement('div', { key: 'input-wrapper', className: "relative" }, [
              React.createElement('input', {
                key: 'input-field',
                type: showKey ? "text" : "password",
                placeholder: "AIzaSy...",
                value: inputKey,
                onChange: e => setInputKey(e.target.value),
                className: "w-full bg-slate-950 border border-slate-800 rounded-xl pl-3 pr-10 py-2.5 text-xs text-slate-100 outline-none focus:border-cyan-500 font-mono"
              }),
              React.createElement('button', {
                key: 'toggle-btn',
                type: "button",
                onClick: () => setShowKey(!showKey),
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300 text-xs"
              }, React.createElement('i', { className: `fa-solid ${showKey ? 'fa-eye-slash' : 'fa-eye'}` }))
            ])
          ]),
          React.createElement('div', {
            key: 'help-text',
            className: "text-[10px] text-slate-500 leading-normal"
          }, [
            "키가 없으신가요? ",
            React.createElement('a', {
              key: 'link',
              href: "https://aistudio.google.com/app/apikey",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "text-cyan-400 font-black hover:underline"
            }, "Google AI Studio에서 무료 API 키 발급받기 ↗"),
            " (구글 계정만 있으면 3초 만에 무료 생성 가능)"
          ]),
          React.createElement('div', {
            key: 'buttons-container',
            className: "flex gap-2 pt-2 border-t border-slate-850"
          }, [
            localStorage.getItem('user_gemini_api_key') && React.createElement('button', {
              key: 'delete-btn',
              type: "button",
              onClick: handleClear,
              className: "flex-1 py-2 rounded-lg bg-rose-950/30 hover:bg-rose-900/40 text-rose-400 text-xs font-bold border border-rose-950/30 transition-colors"
            }, "삭제"),
            React.createElement('button', {
              key: 'save-btn',
              type: "button",
              onClick: handleSave,
              className: "flex-[2] py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-extrabold rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 shadow-lg shadow-cyan-500/15"
            }, [
              React.createElement('i', { key: 'save-icon', className: "fa-solid fa-circle-check" }),
              inputKey.trim() ? 'API 키 등록' : '취소'
            ])
          ])
        ])
      ])
    );
  };

  window.ApiKeyModal = ApiKeyModal;
})();
