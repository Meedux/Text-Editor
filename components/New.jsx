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
import { Menu, Transition } from '@headlessui/react'
import { BsListTask, BsImageFill, BsThreeDotsVertical } from 'react-icons/bs'
import TaskItem from '@tiptap/extension-task-item'
import ListItem from '@tiptap/extension-list-item'
import Blockquote from '@tiptap/extension-blockquote'
import CodeBlock from '@tiptap/extension-code-block'
import { Listbox } from '@headlessui/react'
import { GoTriangleUp, GoTriangleDown } from 'react-icons/go'
import { HiOutlineViewList } from 'react-icons/hi'
import Underline from '@tiptap/extension-underline'


const MobileDropUp = ({ editor }) => {
  return(
    <Menu>
      <span>  
        <Transition
          enter="transition duration-100 ease-out"
          enterFrom="transform scale-95 opacity-0"
          enterTo="transform scale-100 opacity-100"
          leave="transition duration-75 ease-out"
          leaveFrom="transform scale-100 opacity-100"
          leaveTo="transform scale-95 opacity-0"
        >
          <Menu.Items className="p-3 absolute bg-onyx flex flex-col justify-start items-center right-0 -translate-y-full -top-7 rounded-lg">
            <div className='flex'>
              <button 
                onClick={() => editor.chain().focus().setTextAlign('left').run()}
                // className={`${editor.isActive({ textAlign: 'left' }) ? 'bg-border' : ''} p-2 border-r-2 border-r-border`}
                className=' p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <BiAlignLeft size={24} />
                </i>
              </button>

              <button 
                onClick={() => editor.chain().focus().setTextAlign('center').run()}
                // className={`${editor.isActive({ textAlign: 'center' }) ? 'bg-border' : ''} p-2 border-r-2 border-r-border`}
                className=' p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <BiAlignMiddle size={24} />
                </i>
              </button>

              <button 
                onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                  // className={editor.isActive({ textAlign: 'justify' }) ? 'btn-active' : 'btn'}
                className=' p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <BiAlignJustify size={24} />
                </i>
              </button>

              <button 
                onClick={() => editor.chain().focus().setTextAlign('right').run()}
                className=' p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <BiAlignRight size={24} />
                </i>
              </button>
            </div>

            <div className='flex items-start w-full'>
              <button 
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className=' p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <AiOutlineUnorderedList size={24} />
                </i>
              </button>

              <button 
                onClick={() => editor.chain().focus().toggleOrderedList().run()}
                className=' p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <AiOutlineOrderedList size={24} />
                </i>
              </button>

              <button 
                onClick={() => editor.chain().focus().toggleTaskList().run()}
                className='p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <BsListTask size={24} />
                </i>
              </button>
            </div>

            <div className="flex items-start w-full">
              <button 
                onClick={() => editor.chain().focus().toggleBold().run()}
                className='p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <FaBold size={22} />
                </i>
              </button> 
                    
              <button 
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className='p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <ImUnderline size={22} />
                </i>
              </button>

              <button 
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className='p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                <FaItalic size={22} />
                </i>
              </button>

              <button 
                onClick={() => editor.chain().focus().toggleStrike().run()}
                className='p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <FaStrikethrough size={22} />
                </i>
              </button>
            </div>

            <div className='flex items-start w-full'>
              <button 
                onClick={() => editor.chain().focus().toggleCode().run()}
                className='p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <FiCode size={24} />
                </i>
              </button> 
                    
              <button 
                onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                className='p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <BiCodeBlock size={24} />
                </i>
              </button>

              <button 
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className='p-2 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
              >
                <i>
                  <FaQuoteLeft size={24} />
                </i>
              </button>
            </div>
          </Menu.Items>
        </Transition>
        <Menu.Button className='text-ivory hover:bg-ivory hover:text-onyx rounded-md p-1'>
          <BsThreeDotsVertical size={20} />
        </Menu.Button>
      </span>
    </Menu>
  )
}




const MobileMenuBar = ({ editor }) => {
  
  return(
    <>
      <div className='bg-onyx bottom-0 p-3 justify-between items-center md:hidden flex w-full fixed'>
        <div className="flex items-center">
          <button 
            onClick={() => editor.chain().focus().setParagraph().run()}
            // className={`${editor.isActive({ textAlign: 'left' }) ? 'bg-border' : ''} p-2 border-r-2 border-r-border`}
            className='p-1 mr-3 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
          >
            <i>
              <FaParagraph size={20} />
            </i>
          </button>

          <button 
            onClick={() => editor.chain().focus().setHeading({ level: 1 }).run()}
            // className={`${editor.isActive({ textAlign: 'center' }) ? 'bg-border' : ''} p-2 border-r-2 border-r-border`}
            className='p-1 mr-3 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
          >
            <span className='font-extrabold'>H1</span>
          </button>

          <button 
            onClick={() => editor.chain().focus().setHeading({ level: 2 }).run()}
            // className={editor.isActive({ textAlign: 'justify' }) ? 'btn-active' : 'btn'}
            className='p-1 mr-3 text-ivory hover:bg-ivory hover:text-onyx rounded-md'
          >
            <span className='font-extrabold'>H2</span>
          </button>

          <button 
            onClick={() => editor.chain().focus().setHeading({ level: 3 }).run()}
            className=' p-1  text-ivory hover:bg-ivory hover:text-onyx rounded-md'
          >
            <span className='font-extrabold'>H3</span>
          </button>
        </div>

        <div>
          <MobileDropUp editor={editor}/>
        </div>
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
            <div className='mt-7'>
              <input type="text" placeholder='Title...' className='font-bold bg-input-gray p-4' style={{outline: 'none', width: '100%'}}/>
            </div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor}/>
        </div>
        <MobileMenuBar editor={editor} />
    </>
  )
}

export default New