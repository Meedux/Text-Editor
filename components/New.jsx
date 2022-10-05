import React, { Fragment, useState } from 'react'
import { IoArrowUndo, IoArrowRedo  } from 'react-icons/io5'
import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import Code from '@tiptap/extension-code'
import TaskList from '@tiptap/extension-task-list'
import { MdAlignHorizontalCenter, MdTextFields } from 'react-icons/md'
import { BiAlignLeft, BiAlignMiddle, BiAlignJustify, BiAlignRight, BiCodeBlock } from 'react-icons/bi'
import { ImUnderline } from 'react-icons/im'
import { AiOutlineUnorderedList, AiOutlineOrderedList, AiOutlineBlock } from 'react-icons/ai'
import { FiCode } from 'react-icons/fi'
import { FaQuoteLeft, FaParagraph, FaBold, FaItalic, FaStrikethrough } from 'react-icons/fa'
import { Menu } from '@headlessui/react'
import { BsListTask, BsImageFill } from 'react-icons/bs'
import TaskItem from '@tiptap/extension-task-item'
import ListItem from '@tiptap/extension-list-item'
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlock from '@tiptap/extension-code-block'
import { Listbox } from '@headlessui/react'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'
import { HiOutlineViewList } from 'react-icons/hi'
import Underline from '@tiptap/extension-underline'




const MobileMenuBar = ({ editor }) => {
  
  return(
    <>
      <div className='bg-bar-gray p-3 justify-center items-center md:hidden flex'>

      </div>
    </>
  )
}


const DropDown = ({ editor }) => {


  const [ text, setText ] = useState('paragraph')


  function updateText(item) {
    switch(item){
      case 'paragraph':
        editor.chain().focus().setParagraph().run()
        setText('paragraph')
        break
      case 'header 1':
        editor.chain().focus().setHeading({ level: 1 }).run()
        setText('header 1')
        break
      case 'header 2':
        editor.chain().focus().setHeading({ level: 2 }).run()
        setText('header 2')
        break
      case 'header 3':
        editor.chain().focus().setHeading({ level: 3 }).run()
        setText('header 3')
        break
    }
  }

  return (
    <Menu as="div" className='mr-4 w-full'>
      <div className="relative">
        <Menu.Button className='bg-input-gray p-1 w-full flex justify-between items-center rounded-2xl'>
        {(text == "paragraph") ? <FaParagraph size={20} className='ml-2'/> : (text == "header 1") ? <span className='font-bold ml-2'>H1</span> : (text == "header 2") ? <span className='font-bold ml-2'>H2</span> : (text == "header 3") ? <span className='font-bold ml-2'>H3</span> : ";-;"}
        <span>
          <i> <GoTriangleUp size={10}/> </i>
          <i> <GoTriangleDown size={10}/> </i>
        </span>
        </Menu.Button>
        <Menu.Items className='w-full bg-input-gray absolute z-50 p-0 drop-shadow-2xl mt-1'>
          <Menu.Item as='li' className='list-none'>
            {({ active }) => (
              <span className={`${active ? 'bg-slate-600 text-white text-center block' : 'bg-input-gray text-center block'} flex justify-center p-1`} onClick={() => updateText('paragraph')}>
                <FaParagraph size={20}/>
              </span>
            )}
          </Menu.Item>

          <Menu.Item as='li' className='list-none'>
            {({ active }) => (
              <span className={`${active ? 'bg-slate-600 text-white text-center block' : 'bg-input-gray text-center block'}`} onClick={() => updateText('header 1')}>
                <span className='font-bold'>H1</span>
              </span>
            )}
          </Menu.Item>

          <Menu.Item as='li' className='list-none'>
            {({ active }) => (
              <span className={`${active ? 'bg-slate-600 text-white text-center block' : 'bg-input-gray text-center block'}`} onClick={() => updateText('header 2')}>
                <span className='font-bold'>H2</span>
              </span>
            )}
          </Menu.Item>

          <Menu.Item as='li' className='list-none'>
            {({ active }) => (
              <span className={`${active ? 'bg-slate-600 text-white text-center block' : 'bg-input-gray text-center block'}`} onClick={() => updateText('header 3')}>
                <span className='font-bold'>H3</span>
              </span>
            )}
          </Menu.Item>

        
      </Menu.Items>
      </div>
    </Menu>
  )
}


const MenuBar = ({ editor }) => {
    return(
        <>
            <div className='bg-onyx p-2 justify-between items-center md:flex hidden'>
              <div className='flex justify-center items-center ml-3'>
                <div className='pr-4'>
                  <DropDown editor={editor} />
                </div>
                <div className=' border-r-ivory border-l-ivory border-r border-l'>
                  <div className="mx-3">
                    <button 
                      onClick={() => editor.chain().focus().setTextAlign('left').run()}
                      // className={`${editor.isActive({ textAlign: 'left' }) ? 'bg-border' : ''} p-2 border-r-2 border-r-border`}
                      className=' p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                        <BiAlignLeft size={20} />
                      </i>
                    </button>

                    <button 
                      onClick={() => editor.chain().focus().setTextAlign('center').run()}
                      // className={`${editor.isActive({ textAlign: 'center' }) ? 'bg-border' : ''} p-2 border-r-2 border-r-border`}
                      className=' p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                        <BiAlignMiddle size={20} />
                      </i>
                    </button>

                    <button 
                      onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                      // className={editor.isActive({ textAlign: 'justify' }) ? 'btn-active' : 'btn'}
                      className=' p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                        <BiAlignJustify size={20} />
                      </i>
                    </button>

                    <button 
                      onClick={() => editor.chain().focus().setTextAlign('right').run()}
                      className=' p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                        <BiAlignRight size={20} />
                      </i>
                    </button>
                  </div>
                </div>

                <div className=''>
                  <div className='mx-3'>
                    <button 
                      onClick={() => editor.chain().focus().toggleBulletList().run()}
                      className=' p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                        <AiOutlineUnorderedList size={22} />
                      </i>
                    </button>

                    <button 
                      onClick={() => editor.chain().focus().toggleOrderedList().run()}
                      className=' p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                        <AiOutlineOrderedList size={22} />
                      </i>
                    </button>

                    <button 
                      onClick={() => editor.chain().focus().toggleTaskList().run()}
                      className='p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                        <BsListTask size={22} />
                      </i>
                    </button>
                  </div>
                </div>

                <div className='border-r-0 border-l-ivory border-l'>
                  <div className='mx-3 '>
                    <button 
                      onClick={() => editor.chain().focus().toggleBold().run()}
                      className='p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                        <FaBold size={18} />
                      </i>
                    </button> 
                    
                    <button 
                      onClick={() => editor.chain().focus().toggleUnderline().run()}
                      className='p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                        <ImUnderline size={18} />
                      </i>
                    </button>

                    <button 
                      onClick={() => editor.chain().focus().toggleItalic().run()}
                      className='p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                      <FaItalic size={18} />
                      </i>
                    </button>

                    <button 
                      onClick={() => editor.chain().focus().toggleStrike().run()}
                      className='p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                        <FaStrikethrough size={18} />
                      </i>
                    </button>

                    {/* Commented to reserve for text color and highlight component */}
                    {/* <button 
                      onClick={() => editor.chain().focus().toggleBlockquote().run()}
                      className='p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                      <FaItalic size={20} />
                      </i>
                    </button>

                    <button 
                      onClick={() => editor.chain().focus().toggleBlockquote().run()}
                      className='p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                      <FaItalic size={20} />
                      </i>
                    </button> */}
                  </div>
                </div>

                <div className='border-r-0 border-l-ivory border-l'>
                  <div className='mx-3 '>
                    <button 
                      onClick={() => editor.chain().focus().toggleCode().run()}
                      className='p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                      <FiCode size={20} />
                      </i>
                    </button> 
                    
                    <button 
                      onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                      className='p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                        <BiCodeBlock size={20} />
                      </i>
                    </button>

                    <button 
                      onClick={() => editor.chain().focus().toggleBlockquote().run()}
                      className='p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                    >
                      <i>
                      <FaQuoteLeft size={20} />
                      </i>
                    </button>
                  </div>
                </div>
              </div>

              <div className='flex justify-center items-center'>
                <div className=''>
                    <div className='mx-3'>

                      {/* Image Upload Handling Lmao */}
                      {/* <button 
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className=' p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md '
                      >
                          <BsImageFill size={20} />
                      </button> */}

                      <button 
                        onClick={() => editor.chain().focus().undo().run()}
                        className=' p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                      >
                          <IoArrowUndo size={20} />
                      </button>

                      <button 
                        onClick={() => editor.chain().focus().redo().run()}
                        className='p-1 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
                      >
                          <IoArrowRedo size={20} />
                      </button>
                    </div>
                  </div>
              </div>
            </div>
        </>
    )
}


const New = () => {
   const editor = useEditor({
    extensions: [
      StarterKit,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Code.configure({
        HTMLAttributes: {
          class: 'code',
        },
      }),
      TaskList,
      CodeBlock.configure({
        class: 'block',
      }),
      TaskItem,
      ListItem,
      Blockquote,
      BulletList,
      OrderedList,
      Underline
    ],
    content: '<p>Text Here...</p>'
  })
  return (
    <>
        <div className="container mx-auto">
            <div className='mb-7 mt-7'>
              <input type="text" placeholder='Title...' className='font-bold bg-input-gray p-4' style={{outline: 'none', width: '100%'}}/>
            </div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor}/>
            <MobileMenuBar editor={editor} />
        </div>
    </>
  )
}

export default New